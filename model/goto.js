/** Mongoose Model for a GoTo
* @name- goto's name, non-empty
* @location- goto's location (if different from title)
* @group- goto's group, defaulted to All
*/

var mongoose = require('mongoose');
var path = require('path');
var Model = mongoose.model;

var ObjectId = mongoose.Types.ObjectId;

/** GoTo Object */

var goToModel = Model({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
    unique: true           // Should this be unique?
  },
  group: {
    type: String,
    required: true,
    default: {}            // Default query for allUsers method
  },
})

/** The GoTo Object methods */

goToModel.statics.allUsers = function(gname, cb){
  Group.find({"name": gname}, cb);
};

var Goto = mongoose.model('GoTo', goToModel);

module.exports = function(model){
  model.goto = Goto;
};
