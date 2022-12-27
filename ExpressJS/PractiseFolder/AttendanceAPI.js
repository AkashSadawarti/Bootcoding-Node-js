let express = require('express')
let app = express();
let router = express.Router()
let map = new Map()
let count = 0;
let attendance_sheet = []
router.get('/AttendanceOK/:rollno',(req,res)=>{
    map[req.params.rollno] = req.params.rollno 
    attendance_sheet.push(req.params.rollno);
    console.log('Attendance status OK')
    // count++;
    res.send(`Thank you for Attendance ${req.params.rollno}`)
}).get('/count',(req,res)=>{
    // console.log('Attendance Status')
   // res.send(`Attendance : ${count}`)
    res.send(attendance_sheet)

})
app.use(router);
app.listen(5555,()=>{
    console.log('Attendance system is Activated.')
})
