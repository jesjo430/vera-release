var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json({Title: 'Vera 20'});
});

module.exports = router;