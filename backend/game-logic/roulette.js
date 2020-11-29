/* eslint-disable linebreak-style */
let rollTimer = 10;
let rolledNumber = 0;


const startGame = (io) => {
  setInterval(() => {
    if (rollTimer >= 0) {
      io.sockets.emit('timer', rollTimer);
    }
    if (rollTimer === 0) {
      rolledNumber = Math.floor(Math.random() * 15);
      io.sockets.emit('roll', rolledNumber);
    }
    if (rollTimer <= -8) {
      io.sockets.emit('restart');
      rollTimer = 10;
    }
    rollTimer -= 1;
  }, 1000);
};

const getRollTimer = () => rollTimer;

const getRolledNumber = () => rolledNumber;

module.exports.startGame = startGame;
module.exports.getRollTimer = getRollTimer;
module.exports.getRolledNumber = getRolledNumber;
