const LeadRepository = require("../../entities/Lead/LeadRepository");
const Lead = require("../../entities/Lead/Lead");

class LeadInMemory extends LeadRepository {
  constructor() {
    super();
    this.id = 1;
    this.data = [];
    this._seeds();
  }

  _seeds() {
    const gabriel = new Lead(
      null,
      "Gabriel Ávila",
      "avilabiel@gmail.com",
      "+5511323218382"
    );

    const leticia = new Lead(
      null,
      "Letícia Ávila",
      "lele.avila321@hotmail.com",
      "+553281832919"
    );

    this.persist(gabriel).then(() => this.persist(leticia));
  }

  persist(leadEntity) {
    const row = Object.assign({}, leadEntity);
    const rowId = this.id++;
    row.id = rowId;
    this.data.push(row);

    return Promise.resolve(row);
  }
}

module.exports = new LeadInMemory();
