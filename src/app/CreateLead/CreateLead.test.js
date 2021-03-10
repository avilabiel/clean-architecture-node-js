const Lead = require("../../entities/Lead/Lead");
const LeadRepository = require("../../entities/Lead/LeadRepository");
const mockLeadRepository = new LeadRepository();
const CreateLead = require("../../app/CreateLead");

describe("CreateLead", () => {
  it("It should save a new Lead", async () => {
    const persistedLead = new Lead(
      99,
      "Crazy Test",
      "test@gmail.com",
      "+5511932919232"
    );
    mockLeadRepository.persist = jest.fn(() => persistedLead);

    const lead = await CreateLead(
      "Crazy Test",
      "test@gmail.com",
      "+5511932919232",
      { leadRepository: mockLeadRepository }
    );

    expect(mockLeadRepository.persist).toHaveBeenCalledWith(
      new Lead(null, "Crazy Test", "test@gmail.com", "+5511932919232")
    );
    expect(lead).toBe(persistedLead);
  });

  it("It should throw an error when save fails", () => {});
  //   it("It should send an email confirming registration", () => {});
  //   it("It should throw an error when email service fails", () => {});
});
