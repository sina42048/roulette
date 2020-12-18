/* eslint-disable linebreak-style */
const User = require('../api/models/User');
const Bet = require('../api/models/Bet');
const rouletteLogic = require('./roulette');

const bets = [];

const addnewBet = async (socket, verifiedToken, color, amount) => {
  const user = await User
    .findOne({
      where: {
        jwtToken: verifiedToken.token,
      },
    });

  if (!user) {
    return socket.emit('userNotFound');
  }
  if (user.fund >= amount) {
    await Bet.create({
      UserId: user.id,
      amount,
      color,
      round: rouletteLogic.getRoundNumber(),
    });
    await user.update({
      fund: user.fund - amount,
    });
    bets.push({
      socketId: socket.id,
      name: user.username,
      color,
      amount,
    });
    socket.emit('newBetAddedToAllUser', {
      name: user.username,
      color,
      amount,
    });
    socket.broadcast.emit('newBetAddedToAllUser', {
      name: user.username,
      color,
      amount,
    });
    socket.emit('updateFund', user.fund);
    return socket.emit('betSuccess');
  }
  return socket.emit('insufficientFund');
};

const getAllBetsServer = () => bets;

const getAllBets = () => {
  const newBets = [];
  bets.forEach((bet) => {
    const { name, color, amount } = bet;
    newBets.push({ name, color, amount });
  });
  return newBets;
};

const resetBets = () => bets.splice(0, bets.length);

module.exports.addNewBet = addnewBet;
module.exports.getAllBets = getAllBets;
module.exports.resetBets = resetBets;
module.exports.getAllBetsServer = getAllBetsServer;
