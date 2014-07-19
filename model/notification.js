/** Mongoose Model for a Notification

*/

var mongoose = require('mongoose');
var path = require('path');
var Model = mongoose.model;

var ObjectId = mongoose.Types.ObjectId;

/** Notification Object */

/** The Notification Object methods */

var Notification = mongoose.model('Notification', notificationModel);

module.exports = function(model){
  model.notification = Notification;
};
