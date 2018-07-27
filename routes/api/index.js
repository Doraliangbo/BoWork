'use strict';
var express = require('express');
var router = express.Router();

// dispatch API request
var routes = ['category','cardlist'];
routes.forEach(function (router_name) {
    router.use('/' + router_name, require('./' + router_name));
});

module.exports = router;


