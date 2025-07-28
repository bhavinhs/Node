//core modulus
const http = require('http');
//external modules
const express = require('express');

const requestHandler = require('./user');

const app = express(); 
app.get("/",(req, res, next) => {
 console.log("came in first middleware",req.url, req.method);
 next(); //to pass the control to next middleware
})
app.post("/submit-details",(req, res, next) => {
 console.log("came in second middleware",req.url, req.method);
 res.send('<h1>hello from express</h1>');
})

app.use("/",(req, res, next) => {
 console.log("came in another middleware",req.url, req.method);
  res.send('<h1>hello from another express</h1>');
//  next(); //to pass the control to next middleware
})

const server = http.createServer(app);
const PORT =7777;
server.listen(PORT, () =>{
  console.log(`Server running on address http://localhost:${PORT}`);
});      