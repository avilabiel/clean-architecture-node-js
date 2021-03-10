const CreateLead = require("./app/CreateLead");
const ServiceLocator = require("./externals/ServiceLocator");

/*
 TODO: Test
 TODO: Externals - Sequelize, dotenv, Express
 TODO: Routes & Controllers
*/
const t = () => {
  const name = "Testevaldo";
  const email = "testevaldo@gmail.com";
  const phone = "+551193828138";
  const leadRepository = ServiceLocator.repositories.lead;
  const lead = CreateLead(name, email, phone, { leadRepository });
  console.log("Created Lead", lead);
};

t();
