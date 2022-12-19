const fs = require('fs')
fs.writeFile('./Writefile.txt','Hello I am learning NodeJs' ,(err,data) => {
if(err) throw ERROR404 , console.log('SAVED...!')
})