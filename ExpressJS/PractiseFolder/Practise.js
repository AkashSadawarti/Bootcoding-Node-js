// var express = require('express');
// let app = express();

// app.get('/route',(req,res) => {
//     console.log('Request Indentified !');
//      res.send('Hello World')
// }).listen(9001)



let express = require('express')
let app = express()
var router = express.Router();
let count =0;
router.get('/AdmissionsOk',(req,res)=>{
    count++;
    console.log('Welcome for Admissions');
    res.send('Your Admissions is in Process')
}).get('/AdmissionsNo',(req,res) =>{
    count--;
    console.log('Your Admisssion is Cancelled...!')
    res.send('Not Eligible for Admission')     
}).get('/countAdmissions',(req,res)=>{
    console.log('Admission Status');
    res.send('Total Admissions :' + count)
})

app.listen(9001,()=>{
    console.log('Admissions are on')
})
app.use(router);