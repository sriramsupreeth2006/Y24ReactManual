const http = require('http');
const server= http.createServer((req,res) => {
console.log(req.url,req.method)
res.setHeader('Content-Type','text/html');
res.write('<h2> Hello World</h2>');
res.end()
})
server.listen(3000,'localhost', () => {
console.log('listening for requests on port 3000');
});