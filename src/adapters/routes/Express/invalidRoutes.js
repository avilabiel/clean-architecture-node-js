const express = require("express");
const invalidRoutes = express.Router();

const message = "Invalid route!";

invalidRoutes.get("*", (req, res) =>
  res.status(404).send({ success: false, message })
);
invalidRoutes.post("*", (req, res) =>
  res.status(404).send({ success: false, message })
);
invalidRoutes.put("*", (req, res) =>
  res.status(404).send({ success: false, message })
);
invalidRoutes.delete("*", (req, res) =>
  res.status(404).send({ success: false, message })
);
invalidRoutes.patch("*", (req, res) =>
  res.status(404).send({ success: false, message })
);

module.exports = invalidRoutes;
