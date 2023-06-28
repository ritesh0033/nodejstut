
const htpp = require('http');
htpp.createServer((req,res)=>{
    res.write("this is ritesh kumar yadavstudying at sagarmatha engineering college at fourth year.");
    res.end();
}).listen(3000);