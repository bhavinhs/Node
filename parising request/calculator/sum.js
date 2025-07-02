const sumRequestHandler =(req , res) =>{
console.log("in sum request handler ",req.url);
const body = [];
req.on('data', chunk => {
  body.push(chunk);
});
req.on('end',() => {
  const fullbody = Buffer.concat(body).toString();
  console.log(fullbody)
 const params = new URLSearchParams(fullbody);
 console.log(params)
 const bodyobj = Object.fromEntries(params);
 console.log(bodyobj)
 const result = Number(bodyobj.first) + Number(bodyobj.second);
 console.log(result);
 res.setHeader('Content-Type', 'text/html');
    res.write(` 
    <html>
    <head><title>practiec set</title></head>
    <body>
      <h1>your sum is ${result}</h1>
      <a href ="/calculator">go to calculator</a>
    </body>
    </html>
  `);
    return res.end();
})
 
}

exports.sumRequestHandler =sumRequestHandler;