require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./service/router/userRouter.js');
const jokeRouter = require('./service/router/jokeRouter.js');

const { PORT } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cors());

const router = express.Router();
router.get('/hello', (req, res, next) => {
  res.json('hello world');
});
app.use('/w', router);
app.use('/user', userRouter);
app.use('/joke', jokeRouter);

app.listen(8000, () => {
  console.log(`> Ready on http://localhost:${PORT}`);
});
