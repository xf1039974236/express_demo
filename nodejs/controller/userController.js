/* eslint-disable max-len */
class UserController {
  constructor({ User }) {
    this.User = User;
  }

  async getUser(page, pageSize) {
    try {
      console.log('get user list');
      const users = await this.User.find().skip((page - 1) * pageSize).limit(pageSize * 1);
      const total = await this.User.find().count();
      const pagetotal = total % pageSize === 0 ? Math.floor(total / pageSize) : Math.floor(total / pageSize) + 1;
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
      console.log('save user');
      const user = new this.User({
        username,
        picture,
      });
      await user.save();
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserController;
