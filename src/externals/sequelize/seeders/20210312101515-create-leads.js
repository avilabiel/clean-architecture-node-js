const moment = require("moment");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "leads",
      [
        {
          name: "Gabriel Ávila",
          email: "avilabiel@gmail.com",
          phone: "+5511323218382",
        },
        {
          name: "Letícia Ávila",
          email: "lele.avila321@hotmail.com",
          phone: "+553281832919",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("leads", null, {});
  },
};
