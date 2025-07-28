//core modulus
const path = require('path');
//external modulus
const express = require('express');

//local modules
const homeRouter = require("./routes/homeRouter")
const contactRouter = require("./routes/contactRouter")
const rootDir = require("./utils/pathUtils");

const app = express();
app.use(express.urlencoded()); // Middleware to parse URL-encoded bodies

app.use(homeRouter);
app.use(contactRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});