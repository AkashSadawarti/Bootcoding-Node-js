let express = require('express')
let app = express();
let router = express.Router()

router.get('/result',(req,res)=>{
    console.log('Welcome to Result Process')
    res.send('Hello World!')
})
app.use(router);
app.listen(2000,()=>{
    console.log('Result process is completed, Thankyou.')
})