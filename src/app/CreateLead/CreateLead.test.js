const Lead = require("../../entities/Lead/Lead");
const LeadRepositoryInterface = require("../../entities/Lead/LeadRepositoryInterface");
const mockLeadRepository = new LeadRepositoryInterface();
const CreateLead = require("../../app/CreateLead");

describe("CreateLead", () => {
  it("It should save a new Lead", async () => {
    const persistedLead = new Lead(
      99,
      "Crazy Test",
      "test@gmail.com",
      "+5511932919232"
    );
    jest.spyOn(mockLeadRepository, "persist").mockImplementationOnce(() => {
      return persistedLead;
    });

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

  it("It should throw an error when save fails", async () => {
    jest.spyOn(mockLeadRepository, "persist").mockImplementationOnce(() => {
      throw new Error();
    });

    const testFunction = () =>
      CreateLead("Crazy Test", "test@gmail.com", "+5511932919232", {
        leadRepository: mockLeadRepository,
      });

    expect(() => {
      testFunction();
    }).toThrowError(Error);
  });

  it("It should send an email confirming registration", () => {});
  it("It should throw an error when email service fails", () => {});
});
