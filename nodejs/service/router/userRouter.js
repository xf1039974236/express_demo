const express = require('express');
const UserController = require('../../controller/userController.js');
const User = require('../../models/user');

const router = express.Router();
const userController = new UserController({ User });
// 获取用户列表
router.route('/userList')
  .get(async (req, res, next) => {
    try {
      const { page, pageSize } = req.query;
      const users = await userController.getUser(page, pageSize);
      res.json(users);
    } catch (error) {
      next('error');
    }
  });
// 存入新用户
router.route('/')
  .post(async (req, res, next) => {
    try {
      console.log(req.body,'===----111----1');
      const { username, picture } = req.body;
      const user = await userController.saveUser(username, picture);
      res.json(user);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
