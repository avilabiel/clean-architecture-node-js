const constants = require("./Constants");

class ServiceLocator {
  constructor() {
    this.repositories = this.buildRepositories();
    this.services = this.buildServices();
  }

  buildServices() {
    return {
      email: this.buildEmailService(),
    };
  }

  buildRepositories() {
    return {
      lead: this.buildRepository("Lead"),
    };
  }

  buildRepository(repositoryInCamelCaseWithFirstLetterUpper) {
    if (process.env.DATABASE_ENGINE === constants.DATABASE_ENGINES.IN_MEMORY)
      return require(`./repositories/${repositoryInCamelCaseWithFirstLetterUpper}InMemory`);

    if (process.env.DATABASE_ENGINE === constants.DATABASE_ENGINES.MYSQL)
      return require(`./repositories/${repositoryInCamelCaseWithFirstLetterUpper}MySQL`);

    throw new Error(
      `Repository ${repositoryInCamelCaseWithFirstLetterUpper} not supported`
    );
  }

  buildEmailService() {
    return require("./EmailServiceMailer");
  }
}

module.exports = new ServiceLocator();
