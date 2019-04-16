require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./service/router/userRouter.js');

const { PORT } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

const router = express.Router();
router.get('/hello', (req, res, next) => {
  res.json('hello world');
});
app.use('/w', router);
app.use('/user', userRouter);

app.listen(3000, () => {
  console.log(`> Ready on http://localhost:${PORT}`);
});
