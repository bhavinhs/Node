// const http = require('http');
const {sumRequestHandler} = require('./sum');
// const server = http.createServer();
const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
    <head><title>practiec set</title></head>
    <body>
      <h1>welcome to calculator</h1>
      <a href ="/calculator">go to calculator</a>
    </body>
    </html>
  `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
     <head><title>calculator</title></head>
      <body>
       <h1>welcome to calculator</h1>
       <form action="/calculate-result" method="POST">
       <input type="text" placeholder ="first num "
       name="first" />
       <input type="text" placeholder ="second  num "
       name="second" />
       <input type="submit" value ="sum">
       </form>
      </body>
    </html>
  `);
    return res.end();
  }else if (req.url.toLowerCase() === "/calculate-result" && req.method === 'POST'){
   return sumRequestHandler(req , res);
   
  }
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
    <head><title>practiec set</title></head>
    <body>
      <h1>404 error </h1>
      <a href ="/">go to home</a>
    </body>
    </html>
  `);
  res.end();
}



exports.requestHandler = requestHandler;