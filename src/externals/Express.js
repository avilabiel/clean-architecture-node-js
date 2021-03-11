const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const Youch = require("youch");

class Server {
  constructor() {
    this.express = express();

    this.middlewares();
    // this.routes();
    // this.invalidRoutes();
    this.exception();

    this.createHTTPServer();
  }

  middlewares() {
    this.express.use(helmet());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.express.use(require("./routes"));
  }

  invalidRoutes() {
    this.express.use(require("./invalid-routes"));
  }

  exception() {
    this.express.use(async (err, req, res, next) => {
      let message = "Internal Server Error";

      if (process.env.NODE_ENV !== "production") {
        const youch = new Youch(err);
        message = await youch.toJSON();
      }

      return res.status(500).send({ message });
    });
  }

  createHTTPServer() {
    this.express.listen(process.env.PORT);
    console.log(`Server running at port ${process.env.PORT}`);
  }
}

module.exports = new Server();
