const CreateLead = require("../../../app/CreateLead/CreateLead");
const SendLeadByEmail = require("../../../app/SendLeadByEmail/SendLeadByEmail");

class CreateLeadController {
  async post(req, res) {
    const { name, email, phone } = req.body;
    const { services, repositories } = req.serviceLocator;
    const { lead: leadRepository } = repositories;
    const { email: emailService } = services;

    try {
      const lead = await CreateLead(name, email, phone, { leadRepository });
      const sendLeadByEmail = new SendLeadByEmail(lead, {
        emailService,
      });
      const sendEmailResponse = await sendLeadByEmail.send();
      const success = lead.id !== null && sendEmailResponse.success;

      return res.send({ success, message: "Lead created", lead });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({
          success: false,
          message: "There was an error to create this Lead",
        });
    }
  }
}

module.exports = new CreateLeadController();
