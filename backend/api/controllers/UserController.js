/* eslint-disable no-console */
const User = require('../models/User');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');
const validator = require('validator');
const emailTransporter = require('../services/mail.service');
const config = require('../../config');

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
          jwtToken: Math
            .random()
            .toString(36)
            .substring(2, 15) +
            Math
              .random()
              .toString(36)
              .substring(2, 15),
          activationToken: Math
            .random()
            .toString(36)
            .substring(2, 15) +
            Math
              .random()
              .toString(36)
              .substring(2, 15),
        });
        const mailOptions = {
          from: 'sinaroullete@gmail.com',
          to: user.email,
          subject: 'Activate your account',
          html: `Hello Dear ${user.username} , please go to <a href="${config.url}/activation/${user.activationToken}">HERE</a> for activating your account .`,
        };
        emailTransporter.sendMail(mailOptions);
        return res.status(200).json({ msg: 'User created succesfully.' });
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
          return res.status(400).json({ msg: 'Bad Request: User not found', code: 1 });
        }

        if (!user.isActivated) {
          return res.status(400).json({ msg: 'Bad Request: User not activated', code: 2 });
        }

        if (bcryptService().comparePassword(password, user.password)) {
          await user.update({
            jwtToken: Math
              .random()
              .toString(36)
              .substring(2, 15) +
              Math
                .random()
                .toString(36)
                .substring(2, 15),
          });
          const token = authService().issue({ token: user.jwtToken });

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

  const resetPassword = async (req, res) => {
    const { body } = req;
    if (body.password && body.cpassword
      && validator.equals(body.password, body.cpassword)
      && validator.isLength(body.password, { min: 6 })) {
      try {
        const { token } = req.token;
        const user = await User
          .findOne({
            where: {
              jwtToken: token,
            },
          });
        const newPassword = bcryptService().newPassword(body.password);
        await user.update({
          password: newPassword,
        });
        return res.status(200).json({ msg: 'Password update successfully !' });
      } catch (err) {
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }
    return res.status(400).json({ msg: 'password field required' });
  };

  const activate = async (req, res) => {
    const { token } = req.body;
    try {
      const user = await User
        .findOne({
          where: {
            activationToken: token,
          },
        });

      if (!user) {
        return res.status(400).json({ msg: 'Bad Request: User not found' });
      }
      await user.update({ isActivated: true, activationToken: null });
      return res.status(200).json({ msg: 'User Activated !' });
    } catch (err) {
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const chargeAccount = async (req, res) => {
    const { body } = req;
    console.log(body);
    if (body.amount
      && validator.isInt(body.amount.toString(), { min: 5 })) {
      try {
        const { token } = req.token;
        const user = await User
          .findOne({
            where: {
              jwtToken: token,
            },
          });
        await user.update({
          fund: +user.fund + +body.amount,
        });
        return res.status(200).json({ msg: 'Charge account successfully !', amount: +user.fund });
      } catch (err) {
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }
    return res.status(400).json({ msg: 'amount field required' });
  };

  const forget = async (req, res) => {
    const { email } = req.body;
    if (email) {
      try {
        const user = await User
          .findOne({
            where: {
              email,
            },
          });
        if (!user) {
          return res.status(400).json({ msg: 'Bad Request: User not found' });
        }
        const pass = Math
          .random()
          .toString(36)
          .substring(2, 15);
        await user.update({ password: bcryptService().newPassword(pass) });
        const mailOptions = {
          from: 'sinaroullete@gmail.com',
          to: email,
          subject: 'New password',
          html: `Hello Dear ${user.username}<br>your new password is <b>${pass}</b><br>please change your password after login`,
        };
        emailTransporter.sendMail(mailOptions, (error) => {
          if (error) {
            console.log(error);
          }
        });
        return res.status(200).json({ msg: 'New password sent to email' });
      } catch (err) {
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }
    return res.status(400).json({ msg: 'Bad Request: Email not found !' });
  };

  const support = async (req, res) => {
    const { title, description } = req.body;
    const { token } = req.token;
    if (title && description
      && validator.isLength(description, { min: 6 })) {
      try {
        const user = await User
          .findOne({
            where: {
              jwtToken: token,
            },
          });
        if (!user) {
          return res.status(400).json({ msg: 'Bad Request: User not found' });
        }
        const mailOptions = {
          from: user.email,
          to: 'sinaroullete@gmail.com',
          subject: `New Ticket From ${user.username}`,
          html: `Hello Admin !<br> user ${user.username} sent ticket <br><br> title: <b>${title}</b> <br> description: <b>${description}</b>`,
        };
        emailTransporter.sendMail(mailOptions, (error) => {
          if (error) {
            console.log(error);
          }
        });
        return res.status(200).json({ msg: 'ticket submitted' });
      } catch (err) {
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }
    return res.status(400).json({ msg: 'Bad Request: missing fields !' });
  };


  return {
    register,
    login,
    validate,
    getAll,
    forget,
    activate,
    resetPassword,
    chargeAccount,
    support,
  };
};

module.exports = UserController;
