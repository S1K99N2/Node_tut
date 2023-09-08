const server =require('http');
const data =require('./app')
server.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application\JSON'});
    res.write(JSON.stringify (data))
    res.end();
}).listen(4500);