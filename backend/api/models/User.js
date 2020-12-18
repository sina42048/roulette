const Sequelize = require('sequelize');
const Bet = require('./Bet');
const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');

const hooks = {
  beforeCreate(user) {
    user.password = bcryptService().password(user); // eslint-disable-line no-param-reassign
  },
};

const tableName = 'users';

const User = sequelize.define('User', {
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
  },
  fund: {
    type: Sequelize.INTEGER,
    defaultValue: 5,
  },
  jwtToken: {
    type: Sequelize.STRING,
  },
  activationToken: {
    type: Sequelize.STRING,
  },
  isActivated: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  password: {
    type: Sequelize.STRING,
  },
}, { hooks, tableName });

// eslint-disable-next-line
User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  delete values.password;
  delete values.jwtToken;

  return values;
};

User.hasMany(Bet);
Bet.belongsTo(User);
module.exports = User;
