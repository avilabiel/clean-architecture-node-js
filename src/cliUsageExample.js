const CreateLead = require("./app/CreateLead");
const ServiceLocator = require("./externals/ServiceLocator");
const SendLeadByEmail = require("./app/SendLeadByEmail/SendLeadByEmail");

/*
 TODO: Externals - Sequelize
 TODO: Automated Tests for Controllers (endpoints)
 TODO: Improve imports
*/
const t = async () => {
  const name = "Testevaldo";
  const email = "testevaldo@gmail.com";
  const phone = "+551193828138";
  const leadRepository = ServiceLocator.repositories.lead;
  const lead = await CreateLead(name, email, phone, { leadRepository });
  const sendLeadByEmail = new SendLeadByEmail(lead, {
    emailService: ServiceLocator.services.email,
  });

  const sendEmailResponse = await sendLeadByEmail.send();
  console.log("Email Sent?", sendEmailResponse, lead);
};

t();
