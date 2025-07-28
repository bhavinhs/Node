const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("dummy first middleware", req.url, req.method);
    next();
});
app.use("/", (req, res, next) => {
    console.log("second  middleware", req.url, req.method);
    next();
});
// app.use("/", (req, res, next) => {
//   console.log("third middleware", req.url, req.method);
//   res.send('<h1>Hello from Express</h1>');
// next();
// });
app.get("/", (req, res, next) => {
    console.log("handling middleware", req.url, req.method);
    res.send('<h1>welcome to handling page</h1>');
});
app.get("/contact-us", (req, res, next) => {
    console.log("handling / contact us", req.url, req.method);
    res.send(`<h1>welcome to contactus page</h1>
        <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter your name">
            <input type="email" name="email" placeholder="Enter your email">
            <button type="submit">Submit</button>
        </form>`);
});
app.post("/contact-us", (req, res, next) => {
    console.log("handling / contact us for post", req.url, req.method);
    res.send(`<h1>thank you for submit</h1>`);
});

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});