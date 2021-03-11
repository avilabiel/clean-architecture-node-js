const Lead = require("../../entities/Lead/Lead");

module.exports = (name, email, phone, { leadRepository }) => {
  const lead = new Lead(null, name, email, phone);
  return leadRepository.persist(lead);
};
