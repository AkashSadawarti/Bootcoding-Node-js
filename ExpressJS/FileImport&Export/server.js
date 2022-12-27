let express = require('express')
let app = express()
let router = express.Router() 
//importing File
const file = require('./Info')
file(1,'Alex');

// router.get('/info',(req,res)=>{
//     res.send('')
// })
// app.use(router);
// app.listen(1212,()=>{
//     console.log('Process completed')
// })