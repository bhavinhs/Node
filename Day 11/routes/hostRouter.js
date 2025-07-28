const path = require("path");
//external modules

const express = require("express");
const hostRouter = express.Router();

//local modules
const rootDir = require("../utils/pathUtils");

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir,  "views", "add_home.html"));
});
hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir,  "views", "homeadded.html"));
});
module.exports = hostRouter;
