/** Mongoose Model for a Group
* @name- group's name, non-empty
* @displayName- group's display name for UI
* @users- group's useers, single-element array if not given (creater entry)
*/

var mongoose = require('mongoose');
var path = require('path');
var Model = mongoose.model;

var ObjectId = mongoose.Types.ObjectId;

/** Group Object */

var groupModel = Model({
  name: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
    unique: true           // Should make displayname unique to users, but maybe not done here.
  },
  users: {
    type: Array,
    required: true
  },
})

/** The Group Object methods */

var Group = mongoose.model('Group', groupModel);

module.exports = function(model){
  model.group = Group;
};
