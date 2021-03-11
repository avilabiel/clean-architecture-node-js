const express = require("express");
const routes = express.Router();

routes.get("/hello-world", (req, res) => {
  return res.send({
    success: true,
    message: "Hello World!",
  });
});

module.exports = routes;
