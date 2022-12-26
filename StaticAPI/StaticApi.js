let http = require('http');
//const { json } = require('stream/consumers');
const info = require('./Info');
http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'json'})
    res.write(JSON.stringify(info))
    res.end()
}).listen(1101)