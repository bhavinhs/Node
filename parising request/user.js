const http = require('http');
const fs = require('fs');
const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  // process.exit();//stop event loop
  //
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>home</title></head>');
    res.write('<body><h1>home</h1></body>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<label for="username">Username:</label>');
    res.write('<input type="text" id="username" name="username" required><br>');
    res.write('<label for="gender">Gender:</label>');
    res.write('<select id="gender" name="gender" required>');
    res.write('<option value="">Select</option>');
    res.write('<option value="male">Male</option>');
    res.write('<option value="female">Female</option>');
    res.write('<option value="other">Other</option>');
    res.write('</select><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
    } else if (req.url === '/products') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>product</title></head>');
      res.write('<body><h1>product page</h1>');
      res.write('</body>');
      res.write('</html>');
      return res.end();

  } else if (req.url.toLowerCase() === '/submit-details' && req.method == 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params =new URLSearchParams(fullBody);
      // const bodyobj = {};
      // for (const [key, val] of params.entries()) {
      //   bodyobj[key] = val;
      // }
      const bodyobj= Object.fromEntries(params);
      console.log(bodyobj);
      fs.writeFileSync('user.txt', JSON.stringify(bodyobj));
    });
    
    res.statusCode = 302;
    res.setHeader('Location', '/');

  }
  //sending response 
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>server</title></head>');
  res.write('<body><h1>server</h1></body>');
  res.write('</html>');
  return res.end();
};
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running on address http://localhost:${PORT}`);
// });    
module.exports = userRequestHandler;