var express = require('express');
var util = require('./util.js');
var mongoose = require('mongoose');
var router = express.Router();

var ObjectId = mongoose.Types.ObjectId;
var errorCallback = util.errorCallback;

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;


/** Controller Methods */
exports.getFriends = function(req, res) {
  model.user.getFriends(req.body.username, function(err, data) {
    if(err) { res.end(JSON.stringify(err)) };
    res.end(JSON.stringify(data));
  });
}

exports.inviteFriend = function(req, res) {
  model.user.inviteFriend(req.body.username, req.body.friend, function(err, data) {
    if(err) { res.end(JSON.stringify(err)) };
    res.end(JSON.stringify(data));
  });
}
