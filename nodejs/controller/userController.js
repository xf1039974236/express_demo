/* eslint-disable max-len */
class UserController {
  constructor({ User }) {
    this.User = User;
  }

  async getUser(page, pageSize) {
    try {
      console.log('get user list');
      const users = await this.User.find().sort({ updatedAt: -1 }).skip((page - 1) * pageSize).limit(pageSize * 1);
      const total = await this.User.find().count();
      // const pagetotal = total % pageSize === 0 ? Math.floor(total / pageSize) : Math.floor(total / pageSize) + 1;
      const data = {
        users,
        total,
      };
      return data;
    } catch (error) {
      throw error;
    }
  }

  async saveUser(username, picture) {
    try {
      const picturelo = 'https://pic1.zhimg.com/v2-113913993a860c3517eae5324d9397b5_1200x500.jpg';
      const email = 'email default';
      const nowTime = new Date();
      const yearTime = nowTime.toLocaleString();
      const user = new this.User({
        username,
        picture: picturelo,
        email,
        createdAt: yearTime,
        updatedAt: yearTime,
      });
      await user.save();
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserController;
