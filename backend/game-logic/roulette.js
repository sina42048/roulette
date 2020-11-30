/* eslint-disable linebreak-style */
const betLogic = require('./bet');

let rollTimer = 15;
let rolledNumber = 0;
const latestRolls = [];

const startGame = (io) => {
  setInterval(() => {
    if (rollTimer >= 0) {
      io.sockets.emit('timer', rollTimer);
    }
    if (rollTimer === 0) {
      rolledNumber = Math.floor(Math.random() * 15);
      io.sockets.emit('roll', rolledNumber);
    }
    if (rollTimer <= -12) {
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
