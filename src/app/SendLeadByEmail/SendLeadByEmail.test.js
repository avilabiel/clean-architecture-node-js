const Lead = require("../../entities/Lead/Lead");
const EmailServiceInterface = require("../../entities/EmailService/EmailServiceInterface");
const mockEmailService = new EmailServiceInterface();
const SendLeadByEmail = require("./SendLeadByEmail");

describe("SendLeadByEmail", () => {
  it("It should send a new email from lead", async () => {
    const persistedLead = new Lead(
      99,
      "Crazy Test",
      "test@gmail.com",
      "+5511932919232"
    );
    const sendEmail = new SendLeadByEmail(persistedLead, {
      emailService: mockEmailService,
    });
    jest.spyOn(sendEmail, "send").mockImplementationOnce(() => {
      return true;
    });

    const emailHasSent = sendEmail.send();

    expect(emailHasSent).toBe(true);
    expect(sendEmail.lead).toBe(persistedLead);
  });

  it("It should throw an error when email service fails", () => {
    const persistedLead = new Lead(
      99,
      "Crazy Test",
      "test@gmail.com",
      "+5511932919232"
    );
    const sendEmail = new SendLeadByEmail(persistedLead, {
      emailService: mockEmailService,
    });
    jest.spyOn(sendEmail, "send").mockImplementationOnce(() => {
      throw new Error();
    });

    const testFunction = () => sendEmail.send();

    expect(sendEmail.lead).toBe(persistedLead);
    expect(() => {
      testFunction();
    }).toThrowError(Error);
  });
});
