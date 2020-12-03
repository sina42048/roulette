/* eslint-disable eqeqeq */
/* eslint-disable linebreak-style */
const betLogic = require('./bet');
const { Random, MersenneTwister19937 } = require('random-js');
const User = require('../api/models/User');

const random = new Random(MersenneTwister19937.autoSeed());
let rollTimer = 15;
let rolledNumber = 0;
const latestRolls = [];

const startGame = (io) => {
  setInterval(() => {
    if (rollTimer >= 0) {
      io.sockets.emit('timer', rollTimer);
    }
    if (rollTimer === 0) {
      rolledNumber = random.integer(0, 14);
      io.sockets.emit('roll', rolledNumber);
    }

    if (rollTimer === -9) {
      console.log(betLogic.getAllBetsServer());
      if (rolledNumber <= 7 && rolledNumber > 0) {
        betLogic.getAllBetsServer().forEach(async (bet) => {
          if (bet.color == 'red') {
            const user = await User
              .findOne({
                where: {
                  username: bet.name,
                },
              });
            await user.update({ fund: user.fund + (bet.amount * 2) });
            io.to(bet.socketId).emit('updateFund', user.fund);
          }
        });
        io.sockets.emit('winner', 'red');
      } else if (rolledNumber > 7) {
        betLogic.getAllBetsServer().forEach(async (bet) => {
          if (bet.color == 'black') {
            const user = await User
              .findOne({
                where: {
                  username: bet.name,
                },
              });
            await user.update({ fund: user.fund + (bet.amount * 2) });
            io.to(bet.socketId).emit('updateFund', user.fund);
          }
        });
        io.sockets.emit('winner', 'black');
      } else {
        betLogic.getAllBetsServer().forEach(async (bet) => {
          if (bet.color == 'green') {
            const user = await User
              .findOne({
                where: {
                  username: bet.name,
                },
              });
            await user.update({ fund: user.fund + (bet.amount * 14) });
            io.to(bet.socketId).emit('updateFund', user.fund);
          }
        });
        io.sockets.emit('winner', 'green');
      }
    }

    if (rollTimer <= -14) {
      latestRolls.push(rolledNumber);
      io.sockets.emit('latestRolls', latestRolls.slice(Math.max(latestRolls.length - 8, 1)));
      io.sockets.emit('restart');
      betLogic.resetBets();
      rollTimer = 15;
    }
    rollTimer -= 1;
  }, 1000);
};

const getRollTimer = () => rollTimer;

const getRolledNumber = () => rolledNumber;

const getLatestRolls = () => latestRolls.slice(Math.max(latestRolls.length - 8, 1));


module.exports.startGame = startGame;
module.exports.getRollTimer = getRollTimer;
module.exports.getRolledNumber = getRolledNumber;
module.exports.getLatestRolls = getLatestRolls;
