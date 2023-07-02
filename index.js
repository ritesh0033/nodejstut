const http= require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    res.write(JSON.stringify({name:'ritesh',mail:'ry0323535@gmail.com'}))
    res.end();

   }).listen(5000);

