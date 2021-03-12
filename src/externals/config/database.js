module.exports = {
  dialect: "mysql",
  username: "root",
  password: "root",
  database: "clean_architecture",
  host: "localhost",
  define: {
    paranoid: false,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
  },
  timezone: "-03:00",
};
