const express = require('express');
const UserController = require('../../controller/userController.js');
const User = require('../../models/user');

const router = express.Router();
const userController = new UserController({ User });

router.route('/userList')
  .get(async (req, res, next) => {
    try {
      console.log('in router');
      const users = await userController.getUser();
      res.json(users);
    } catch (error) {
      next('error');
    }
  });

router.route('/')
  .post(async (req, res, next) => {
    try {
      console.log(req.body);
      const { username, picture } = req.body;
      const user = await userController.saveUser(username, picture);
      res.json(user);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
