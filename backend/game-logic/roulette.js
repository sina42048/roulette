/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
const betLogic = require('./bet');
const { Random, MersenneTwister19937 } = require('random-js');
const User = require('../api/models/User');
const Bet = require('../api/models/Bet');
const { Op } = require('sequelize');
const { CronJob } = require('cron');

const random = new Random(MersenneTwister19937.autoSeed());
let rollTimer = 15;
let rolledNumber = 0;
let round = 1;
const latestRolls = [];

const updateWinnersBet = async (gameRound, color) => {
  await Bet.update({ status: 'win' }, {
    where: {
      round: gameRound,
      color,
    },
  });
};

const updateLosersBet = async (gameRound, color) => {
  await Bet.update({ status: 'lose' }, {
    where: {
      [Op.not]: {
        color,
      },
      round: gameRound,
    },
  });
};

const updateWinnerFund = async (bet, ratio) => {
  const user = await User
    .findOne({
      where: {
        username: bet.name,
      },
    });
  await user.update({ fund: user.fund + (bet.amount * ratio) });
  return user;
};

const startGame = (io) => {
  const job = new CronJob('* * * * * *', (async () => {
    if (rollTimer >= 0) {
      io.sockets.emit('timer', rollTimer);
    }
    if (rollTimer === 0) {
      rolledNumber = random.integer(0, 14);
      io.sockets.emit('roll', rolledNumber);
    }

    if (rollTimer === -9) {
      if (rolledNumber <= 7 && rolledNumber > 0) {
        betLogic.getAllBetsServer().forEach(async (bet) => {
          if (bet.color == 'red') {
            const user = await updateWinnerFund(bet, 2);
            io.to(bet.socketId).emit('updateFund', user.fund);
          }
        });
        io.sockets.emit('winner', 'red');
        await updateWinnersBet(round, 'red');
        await updateLosersBet(round, 'red');
      } else if (rolledNumber > 7) {
        betLogic.getAllBetsServer().forEach(async (bet) => {
          if (bet.color == 'black') {
            const user = await updateWinnerFund(bet, 2);
            io.to(bet.socketId).emit('updateFund', user.fund);
          }
        });
        io.sockets.emit('winner', 'black');
        await updateWinnersBet(round, 'black');
        await updateLosersBet(round, 'black');
      } else {
        betLogic.getAllBetsServer().forEach(async (bet) => {
          if (bet.color == 'green') {
            const user = await updateWinnerFund(bet, 14);
            io.to(bet.socketId).emit('updateFund', user.fund);
          }
        });
        io.sockets.emit('winner', 'green');
        await updateWinnersBet(round, 'green');
        await updateLosersBet(round, 'green');
      }
    }
    if (rollTimer <= -14) {
      latestRolls.push(rolledNumber);
      io.sockets.emit('latestRolls', latestRolls.slice(Math.max(latestRolls.length - 8, 1)));
      io.sockets.emit('restart');
      betLogic.resetBets();
      rollTimer = 15;
      round += 1;
    }
    rollTimer -= 1;
  }), null, true, 'Asia/Tehran');

  job.start();
};

const getRollTimer = () => rollTimer;

const getRolledNumber = () => rolledNumber;

const getLatestRolls = () => latestRolls.slice(Math.max(latestRolls.length - 8, 1));

const getRoundNumber = () => round;

module.exports.startGame = startGame;
module.exports.getRollTimer = getRollTimer;
module.exports.getRolledNumber = getRolledNumber;
module.exports.getLatestRolls = getLatestRolls;
module.exports.getRoundNumber = getRoundNumber;
