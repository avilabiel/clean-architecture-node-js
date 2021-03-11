const request = require("supertest");
const faker = require("faker");
const { express } = require("../../../externals/Express");

describe("CreateLeadController", () => {
  it("It should create leads and send an email", async () => {
    const body = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    };

    const result = await request(express).post("/lead").send(body);

    expect(result.status).toBe(200);
    expect(result.body.success).toBe(true);
    expect(result.body).toMatchObject({
      success: true,
      message: "Lead created",
      lead: {
        id: 3,
        ...body,
      },
    });
  });
});
