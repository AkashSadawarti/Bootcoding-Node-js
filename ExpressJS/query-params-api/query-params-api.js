const express =  require('express');
const app = express();

let data = [
    {id : 1, name : "Anshul",city : "Nagpur",state:"Maharashtra"},
    {id : 2, name : "Ankit",city : "Indore",state:"MP"},
    {id : 3, name : "Kartik",city : "Merut",state:"UP"},
    {id : 4, name : "Rio",city : "Faridabad",state:"Delhi"},
    {id : 5, name : "Akash",city : "Nagpur",state:"Maharashtra"},
    {id : 6, name : "Jaggu",city : "Noida",state:"Delhi"},
    {id : 7, name : "Prasad",city : "Vadodra",state:"Gujrat"},
    {id : 8, name : "Utkarsh",city : "Ahmedabad",state:"Gujrat"},
    {id : 9, name : "Alok",city : "Bhandara",state:"Maharashtra"},
    {id : 10, name : "Sakshi",city : "Varansi",state:"UP"}
]

app.get('/data',(req,res)=>{
    let dbResponse = data;
    console.log(dbResponse);
    res.json(dbResponse)
})

app.get('/data/:name',(req,res)=>{
    
})


app.listen(8085,()=>{
   console.log("I m ON");    
})