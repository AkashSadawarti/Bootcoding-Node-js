const express = require('express')
var app = express();

// app.get('/',(req,res) => {
//     res.send('Hello')
// })
// app.listen(7860,() =>{
//     console.log("Welcome to express Js")
// })




// app.get('/sum',(req,res)=>{
//     let a = 50;
//     let b = 60;
//     let c = 70;
//     let sum;
//     res.send(`sum is ${a+b+c}`);
// }).listen(4000,()=>{
//     console.log('addition');
// });

app.get('/vote',(req, res) =>{
    console.log("Request recieved!")
    let age = 15;
    let newage = parseInt(age);
    if(newage >= 18){
        res.send('You are eligible to vote')
    }
    else{
        res.send(`You are not eligible to vote. waiting period is ${18 - newage} years.`)
    }
})
app.post('/vote', (rq, rs) => {
    console.log("Received Post Request");
    rs.send('Test')
})

app.listen(5000,()=>{
    console.log('Voting Age is 18')
})

