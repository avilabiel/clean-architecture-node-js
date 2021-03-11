class CreateLeadController {
  post(req, res) {
    return res.send({ success: true, message: "Lead" });
  }
}

module.exports = new CreateLeadController();
