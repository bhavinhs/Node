const path = require("path");
//external modules

const express = require("express");
const hostRouter = express.Router();

//local modules
const rootDir = require("../utils/pathUtils");

hostRouter.get("/add-home", (req, res, next) => {
  res.render('add_home',{pageTitle: "Add Home"});
});
const registeredHome =[];

hostRouter.post("/add-home", (req, res, next) => {
  console.log("successfully added",req.body , req.body.houseName);
  registeredHome.push({houseName: req.body.houseName})
  res.render('homeadded', {pageTitle: "Home Added"});
});

exports.hostRouter = hostRouter;
exports.registeredHome = registeredHome ;