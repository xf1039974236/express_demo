class UserController {
  constructor({ User }) {
    this.User = User;
  }

  async getUser() {
    try {
      console.log('get user list');
      const users = await this.User.find();
      console.log(users);
      return users;
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
