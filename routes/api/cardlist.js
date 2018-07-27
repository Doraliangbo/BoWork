'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    return res.json("{test:this is cardlist}");
});

module.exports = router;
