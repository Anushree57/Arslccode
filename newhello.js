const http = require('http');

const hostname = '127.0.0.1';
const port = 9090;

const server = http.createServer((req,res) =>{
  res.statusCode = 200;
  res.setHeader('Content-type','text/plain');
  res.end('Hello from server response\n');
  });
  
  server.listen(port,hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log("Consoles Hello World");
  console.log("Consoles Hello World1223");
  });