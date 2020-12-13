var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Go to /availablerides to check the available Items' });
});

router.get('/availablerides', function(req, res, next) {
                res.send("These are the available items :<br/>Item no 1: Nike Running shoes  <br/>Item no 2: Addidas FLipflops Item no 3: Iphone 11 pro <br/>");
               
});

module.exports = router;