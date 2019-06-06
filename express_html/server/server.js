/* eslint-disable no-undef */
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

    server.get("*", (req, res) => {
      // const page = req.query.page;
      // const pageArr = ["/index" , "/user"];
      // const inor = pageArr.indexOf(page);
      // if(inor){
      //   return handle(req, res);
      // }
      return handle(req, res);
    });
    // server.get("/userind", (req, res) => {
    //   const actualPage = "/user";
    //   app.render(req, res, actualPage);
    // });

    server.listen(port, err => {
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
