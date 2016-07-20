/**
 * Created by Aharon on 19/07/2016.
 */
var express = require('express');
var router = express.Router();
var trelloService = require('../services/trelloService');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Api' });
});

router.get('/addCheckListItem', function(req, res, next) {
    var userToken = process.env.TRELLO_USER_TOKEN;
    var itemName = req.param('name');

    trelloService.createCheckListItem(userToken, '578d113865f6fbd4b5c08183', itemName);
    res.send('check list item added!');
});

router.get('/getCheckList', function(req, res, next) {
    var userToken = process.env.TRELLO_USER_TOKEN;

    trelloService.getCheckList(userToken, '578d113865f6fbd4b5c08183').then(function (data) {
        res.send(data);
    });

});


module.exports = router;
