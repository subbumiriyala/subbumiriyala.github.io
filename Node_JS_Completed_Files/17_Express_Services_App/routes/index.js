const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const getDB = require('../database/database').getDB;

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/raise', function(req, res, next) {
    res.render('raise-complaints');
});

router.get('/complaints', function(req, res, next) {
    // get the Database Object
    const db = getDB();
    db.collection('service').find({}).toArray((err,complaints) => {
        if(err){
            return console.log(err);
        }
        console.log(complaints);
        res.render('complaints', {complaints : complaints});
    });
});

// POST Requests
router.post('/raise',urlencodedParser, function(req, res, next) {
    let complaint = {
        username : req.body.username,
        email : req.body.email,
        issue : req.body.issue,
        issueDesc : req.body.issueDesc
    };
    // Get the database Object
    const db = getDB();
    db.collection('service').insertOne(complaint,(err , data) => {
        if(err) throw err;
    });
    console.log(complaint);
    res.render('raise-success',{complaint : complaint});
});

module.exports = router;
