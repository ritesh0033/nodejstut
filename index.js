const http= require('http')
http.createServer((req,res)=>{
    res.write("Hello,Ritesh");
res.end()
   }).listen(3000);

