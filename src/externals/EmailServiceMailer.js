const mailer = require("nodemailer");
const EmailServiceInterface = require("../entities/EmailService/EmailServiceInterface");

class EmailService extends EmailServiceInterface {
  constructor() {
    super();
    this.mailer = mailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 587,
      secure: false,
      auth: {
        user: "bfcd170af5ca50",
        pass: "8920d5329d8ff4",
      },
    });
  }

  send({ to, from, subject, content, cco = [], cc = [] }) {
    const result = this.mailer.sendMail({
      to,
      from,
      subject,
      html: content,
      cc,
      cco,
    });

    return {
      success: this.emailHasSent(result),
      operation: result,
    };
  }

  emailHasSent(lastOperation) {
    return lastOperation.messageId !== undefined;
  }
}

module.exports = new EmailService();
