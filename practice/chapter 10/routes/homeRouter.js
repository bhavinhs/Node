const path = require("path");

//external modules
const express = require("express");
const homeRouter = express.Router();

//local modules
const rootDir = require("../utils/pathUtils");

homeRouter.get("/", (req, res, next) => {
    console.log("handling middleware", req.url, req.method);
    res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = homeRouter;
