/* eslint-disable no-console */
/**
 * third party libraries
 */
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const mapRoutes = require('express-routes-mapper');
const cors = require('cors');
const io = require('socket.io')(4000, {
  cors: {
    origin: 'http://192.168.1.83:4200', // should be change when upload to host
    credentials: true,
  },
  serveClient: true,
});
const gameLogic = require('../game-logic/roulette');
const betLogic = require('../game-logic/bet');

/**
 * server configuration
 */
const config = require('../config/');
const dbService = require('./services/db.service');
const auth = require('./policies/auth.policy');
const authService = require('./services/auth.service');

// environment: development, staging, testing, production
const environment = process.env.NODE_ENV;

/**
 * express application
 */
const app = express();
const server = http.Server(app);
const mappedOpenRoutes = mapRoutes(config.publicRoutes, 'api/controllers/');
const mappedAuthRoutes = mapRoutes(config.privateRoutes, 'api/controllers/');
const DB = dbService(environment, config.migrate).start();

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors());

// secure express app
app.use(helmet({
  dnsPrefetchControl: false,
  frameguard: false,
  ieNoOpen: false,
}));

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'dist', 'roulette')));

// secure your private routes with jwt authentication middleware
app.all('/private/*', (req, res, next) => auth(req, res, next));

// fill routes for express application
app.use('/public', mappedOpenRoutes);
app.use('/private', mappedAuthRoutes);

app.get('/*', async (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'roulette', 'index.html'));
});

/**
 * Game Logic to start roulette game
 */

gameLogic.startGame(io);

/**
 * Socket server
 */

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('enteredGame', () => {
    socket.emit('allBets', betLogic.getAllBets());
    socket.emit('latestRolls', gameLogic.getLatestRolls());
    if (gameLogic.getRollTimer() <= 0) {
      socket.emit('timer', 0);
      socket.emit('timerDiff', gameLogic.getRollTimer());
      socket.emit('rolling', gameLogic.getRolledNumber());
    }
  });

  socket.on('newBet', (data) => {
    if (gameLogic.getRollTimer() > 0) {
      const { token, amount, color } = data;
      authService().verify(token, (err, verifiedToken) => {
        if (err) {
          return socket.emit('userNotFound');
        }
        return betLogic.addNewBet(socket, verifiedToken, color, amount);
      });
    } else {
      socket.emit('betFailed');
    }
  });
});

server.listen(config.port, '0.0.0.0', () => {
  if (environment !== 'production' &&
    environment !== 'development' &&
    environment !== 'testing'
  ) {
    console.error(`NODE_ENV is set to ${environment}, but only production and development are valid.`);
    process.exit(1);
  }
  return DB;
});
