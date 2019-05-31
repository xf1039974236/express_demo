require("dotenv").config();
const express = require("express");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
global.fetch = require("node-fetch");
app
  .prepare()
  .then(() => {
    const server = express();
    const router = express.Router();
    router.get("/_next/*", (req, res) => {
      return handler(req, res);
    });

    // server.get('/filter/:id', (req, res) => {
    //   const actualPage = '/index/editorFilter';
    //   const queryParams = { id: req.params.id };
    //   app.render(req, res, actualPage, queryParams);
    // });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log(
        `> Ready on http://localhost:${port}, cross-env: [${
          process.env.NODE_ENV
        }]`
      );
    });
  })
  .catch(ex => {
    process.exit(ex, 11111);
  });
