const LeadRepositoryInterface = require("../../entities/Lead/LeadRepositoryInterface");
const { Lead: Model } = require("../sequelize/models");
class LeadMySQL extends LeadRepositoryInterface {
  constructor() {
    super();
  }

  async persist(lead) {
    const persistedLead = await Model.create(lead);
    lead.id = persistedLead.id;
    return lead;
  }
}

module.exports = new LeadMySQL();
