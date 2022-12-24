
let count = 0;
let map = new Map();




const { json } = require('express');
var express = require('express');
var router = express.Router();

var app = express();
router.get('/user/:userId/upvote', function (req, res) {
    map[req.params.userId] = req.params.userId
    console.log("Upvote API is invoked " + map[req.params.userId])
    count++;

    let javaResponse = {
        "voting": {
            "upvote": 100,
            "downvote": 10
        }
    }

    res.send(`Thanks ${req.params.userId} for votting! ${JSON.stringify(javaResponse)}`);
});


router.get('/user/:userId/downvote', function (req, res) {
    map[req.params.userId] = 1
    console.log("Downvote API is invoked")
    count--;
    res.send(`No Thanks ${req.params.userId} for not votting chetana!`);
});

router.get('/count', function (req, res) {
    console.log("Vote Count API is invoked")
    res.send('Total votes : ' + count);
})
app.use(router);
app.listen(5000, () => {
    console.log('Voting System is ON!')
})
