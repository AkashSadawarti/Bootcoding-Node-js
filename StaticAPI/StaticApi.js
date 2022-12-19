let http = require('http');
//const { json } = require('stream/consumers');
const data = require('./Info');
http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'json'})
    res.write(JSON.stringify(data))
    res.end()
}).listen(1101)