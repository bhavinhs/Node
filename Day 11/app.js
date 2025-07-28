//core path
const path  = require("path");
//external modulus
const express = require("express");
const bodyParser = require("body-parser");
//local modules
const userRouter = require("./routes/userrouter")
const hostRouter = require("./routes/hostRouter")
const rootDir =require("./utils/pathUtils");

const app = express();

app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
    console.log( req.url, req.method);
    next();
});
app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
 