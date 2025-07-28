const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit();
  //stop event loop
  // res.end('Server is running');
});
const PORT =7777;
server.listen(PORT, () =>{
  console.log(`Server running on address http://localhost:${PORT}`);
});    