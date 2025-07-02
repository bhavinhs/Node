const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);
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
  fs.writeFileSync('user.txt','userdata');
  res.statusCode=302;

  }
  //sending response 
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>server</title></head>');
  res.write('<body><h1>server</h1></body>');
  res.write('</html>');
  return res.end();
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});    