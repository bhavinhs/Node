const sumRequestHandler =(req , res) =>{
console.log("1 in sum request handler ",req.url);
const body = [];
let result;
req.on('data', chunk => {
  console.log("2 chunk came")
  body.push(chunk);
  
});
req.on('end',() => {
    console.log("3 buffer came")
  const fullbody = Buffer.concat(body).toString();
  console.log(fullbody)
 const params = new URLSearchParams(fullbody);
 console.log(params)
 const bodyobj = Object.fromEntries(params);
 console.log(bodyobj)
 result = Number(bodyobj.first) + Number(bodyobj.second);
 console.log(result);

})
  console.log("4 response  came")
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
}

exports.sumRequestHandler =sumRequestHandler;