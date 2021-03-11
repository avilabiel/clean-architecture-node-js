const express = require("express");
const { route } = require("./invalidRoutes");
const routes = express.Router();

const { CreateLeadController } = require("../../controllers");

routes.get("/hello-world", (req, res) => {
  return res.send({
    success: true,
    message: "Hello World!",
  });
});

routes.post("/lead", CreateLeadController.post);

module.exports = routes;
