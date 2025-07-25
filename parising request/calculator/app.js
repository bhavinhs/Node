const http = require('http');

const {requestHandler} =require('./handler');

const server = http.createServer( requestHandler);


const PORT = 7777;
server.listen(PORT, () => {
  console.log(` Server running on address http://localhost:${PORT}`);
});