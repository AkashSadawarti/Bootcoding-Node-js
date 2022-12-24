
let count = 0;
var express = require('express');
var router = express.Router();

var app = express();
router.get('/upvote', function(req, res){
    console.log("Upvote API is invoked")
    count++;
   res.send('Thanks for votting!');
});


router.get('/downvote', function(req, res){
    console.log("Downvote API is invoked")
    count--;
    res.send('No Thanks for downvoting!');
 });

router.get('/count', function(req, res){
    console.log("Vote Count API is invoked")
    res.send('Total votes : ' + count);
})
app.use(router);
app.listen(5000,()=>{
    console.log('Voting System is ON!')
})
