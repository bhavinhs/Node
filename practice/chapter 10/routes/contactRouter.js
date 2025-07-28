const path = require("path");

//external modules
const express = require("express");
const contactRouter = express.Router();

//local modules
const rootDir = require("../utils/pathUtils");

contactRouter.get("/contact-us", (req, res, next) => {
  console.log("handling / contact us", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});
contactRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "contact_success.html"));
});

module.exports = contactRouter;
