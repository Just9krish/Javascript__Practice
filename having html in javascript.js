 const http = require('http');
 const fs = require('fs');
 const fileContent =fs.readFileSync('basic.html');

 const sever = http.createServer((req, res)=>{
     
    res.writeHead(200 ,{'Content-type' : 'text/html'});
    res.end(fileContent)
 })

 Server.listen(80, '127.0.01', ()=>{
     console.log('Listenin to port 80')
 })