class EmailServiceInterface {
  send({ to, from, subject, content, cco = [], cc = [] }) {
    throw new Error("ERROR_METHOD_NOT_IMPLEMENTED");
  }
}

module.exports = EmailServiceInterface;
