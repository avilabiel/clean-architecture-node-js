class SendLeadByEmail {
  constructor(lead, { emailService }) {
    this.lead = lead;
    this.emailService = emailService;
    this.from = '"My Company" <no-reply@mycompany.com>';
    this.cco = "contact@mycompany.com";
    this.subject = "A new Lead has come!";
  }

  send() {
    return this.emailService.send({
      to: this.lead.email,
      from: this.from,
      cco: this.cco,
      subject: this.subject,
      content: this.buildContentInHTML(),
    });
  }

  buildContentInHTML() {
    return `
        <h1>Thank you!</h1>
        <p>Just to confirm, that's what we received from you</p>
        <p>Name: ${this.lead.name}</p>
        <p>Email: ${this.lead.email}</p>
        <p>Phone: ${this.lead.phone}</p>
      `;
  }
}

module.exports = SendLeadByEmail;
