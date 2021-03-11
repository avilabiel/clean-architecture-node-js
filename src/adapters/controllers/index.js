const fs = require("fs");

const buildControllers = () => {
  const controllers = {};
  const dirs = fs
    .readdirSync(__dirname)
    .filter((item) => item.indexOf(".") === -1);

  dirs.forEach((dir) => {
    controllers[dir] = require(`./${dir}/${dir}`);
  });

  return controllers;
};

module.exports = buildControllers();
