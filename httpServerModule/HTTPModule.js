let http = require('http')
http.createServer((req,res) => {
    res.write('Hello welcome to Node Js server....')
    res.end('Ok bye bye.')
}).listen(1980)
