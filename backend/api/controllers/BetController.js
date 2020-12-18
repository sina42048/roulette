/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const User = require('../models/User');
const Bet = require('../models/Bet');

const BetController = () => {
  const getUserBets = async (req, res) => {
    const { token } = req.token;
    try {
      const user = await User
        .findOne({
          where: {
            jwtToken: token,
          },
        });

      const userBets = await Bet.findAll({ where: { userId: user.id }, limit: 10, order: [['createdAt', 'desc']] });
      return res.status(200).json(userBets);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.errno });
    }
  };


  return {
    getUserBets,
  };
};

module.exports = BetController;
