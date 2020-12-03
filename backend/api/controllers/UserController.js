/* eslint-disable no-console */
const User = require('../models/User');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');
const validator = require('validator');

const UserController = () => {
  const register = async (req, res) => {
    const { body } = req;

    if (body.username && body.email && body.password && body.cpassword
        && validator.equals(body.password, body.cpassword)
        && validator.isAlphanumeric(body.username)
        && validator.isEmail(body.email)
        && validator.isLength(body.password, { min: 6 })) {
      try {
        const user = await User.create({
          email: body.email,
          password: body.password,
          username: body.username,
        });
        const token = authService().issue({ id: user.id });

        return res.status(200).json({ token, user });
      } catch (err) {
        console.log(err);
        switch (err.errors[0].path) {
          case 'email':
            return res.status(400).json({ msg: 'Bad Request: Email Already taken !', code: 1 });
          case 'username':
            return res.status(400).json({ msg: 'Bad Request: Username Already taken !', code: 2 });
          default:
            return res.status(500).json({ msg: err.errno });
        }
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Validation Failed !', code: 3 });
  };

  const login = async (req, res) => {
    const { username, password } = req.body;

    if (username && password) {
      try {
        const user = await User
          .findOne({
            where: {
              username,
            },
          });

        if (!user) {
          return res.status(400).json({ msg: 'Bad Request: User not found' });
        }

        if (bcryptService().comparePassword(password, user.password)) {
          const token = authService().issue({ id: user.id });

          return res.status(200).json({ token, user });
        }

        return res.status(401).json({ msg: 'Unauthorized' });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request: Email or password is wrong' });
  };

  const validate = (req, res) => {
    const { token } = req.body;

    authService().verify(token, (err) => {
      if (err) {
        return res.status(401).json({ isvalid: false, err: 'Invalid Token!' });
      }

      return res.status(200).json({ isvalid: true });
    });
  };

  const getAll = async (req, res) => {
    try {
      const users = await User.findAll();

      return res.status(200).json({ users });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };


  return {
    register,
    login,
    validate,
    getAll,
  };
};

module.exports = UserController;
