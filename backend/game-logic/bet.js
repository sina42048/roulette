/* eslint-disable linebreak-style */
const bets = [
  { name: 'Sina', color: 'red', amount: 100 },
  { name: 'Kaveh', color: 'green', amount: 50 },
  { name: 'Ali', color: 'black', amount: 25 },
];

const addnewBet = (name, amount, color) => bets.push({ name, amount, color });

const getAllBets = () => bets;

const resetBets = () => bets.splice(0, bets.length);

module.exports.addNewBet = addnewBet;
module.exports.getAllBets = getAllBets;
module.exports.resetBets = resetBets;
