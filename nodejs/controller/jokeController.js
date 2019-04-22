class JokeController {
  constructor(Joke) {
    this.Joke = Joke;
  }

  async saveJoke(title, content, name) {
    try {
      const nowTime = new Date();
      console.log(nowTime);
      const image = 'https://pic1.zhimg.com/v2-113913993a860c3517eae5324d9397b5_1200x500.jpg';
      const joke = new this.Joke({
        title,
        content,
        image,
        createdBy: name,
        createdAt: nowTime,
      });
      console.log(joke);
      await joke.save();
      console.log(joke);
      return joke;
    } catch (error) {
      throw error;
    }
  }

  async getJokeList(page, pageSize) {
    try {
      const joke = await this.Joke.find();
      console.log(joke);
      const list = await this.Joke.find()
        .skip(page * pageSize)
        .limit(pageSize)
        .exec();
      return list;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = JokeController;
