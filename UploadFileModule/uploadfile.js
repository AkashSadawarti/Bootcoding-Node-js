const http = require('http');
const fs = require('fs');
let formidable = require('formidable');
http.createServer((req,res)=>{
   let form = new formidable.IncomingForm();
   form.parse(req,(err,fields,file)=>{
    let filepath = file.fileuploads.filepath;
    let newpath = '../Uploads/';
     newpath += file.fileuploads.originalFilename;
     fs.rename(filepath,newpath,()=>{
        res.write('Node js file uploaded successfully ! ');
        res.end();
     });
   });
// res.write('Hello 1')
// res.end()
}).listen(8080)