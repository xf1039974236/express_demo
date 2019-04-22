const express = require('express');

const JokeController = require('../../controller/jokeController.js');
const Joke = require('../../models/joke.js');

const jokeController = new JokeController({ Joke });

const router = express.Router();

router.route('/')
  .post(async (req, res, next) => {
    try {
      const { title, content } = req.body;
      const { name } = req.headers;
      const joke = await jokeController.saveJoke(title, content, name);
      res.json(joke);
    } catch (error) {
      next();
    }
  });

router.route('/list')
  .get(async (req, res, next) => {
    try {
      const { page, pageSize } = req.params;
      const list = await jokeController.getJokeList(page, pageSize);
      res.json(list);
    } catch (error) {
      next();
    }
  });

module.exports = router;
