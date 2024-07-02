const http = require('http');
const fs = require('fs');

const file = fs.readFileSync(`${__dirname}/index.html`);

const server = http.createServer((req,res)=>{
    res.end(file);
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})