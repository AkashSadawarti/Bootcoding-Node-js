let fs = require('fs')
fs.readFile('./Readfile.text',(error,data) => {
    if(error) throw ERROR404; console.log('Hello Ready to read ....\n' + data.toString())
})