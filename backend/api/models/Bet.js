/* eslint-disable linebreak-style */
const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'bets';

const Bet = sequelize.define('Bet', {
  color: {
    type: Sequelize.STRING,
  },
  amount: {
    type: Sequelize.INTEGER,
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'WaitForRoll',
  },
  round: {
    type: Sequelize.INTEGER,
  },
}, { tableName });

// eslint-disable-next-line
// Bet.prototype.toJSON = function () {
//   const values = Object.assign({}, this.get());

//   delete values.password;
//   delete values.jwtToken;

//   return values;
// };

module.exports = Bet;
