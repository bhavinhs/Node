const path = require("path");
//external modules
const express =require("express");
const userRouter =express.Router();

//local modulus 
const rootDir = require("../utils/pathUtils");
const { registeredHome } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
  console.log(registeredHome)
  // res.sendFile(path.join(rootDir,  "views", "home.html"));  
  res.render('home', {registeredHome : registeredHome, pageTitle: "Airbnb  Home" });            
});
module.exports = userRouter;