/** Mongoose Model for a User
* @username- user's username, non-empty
* @email- user's email, empty string if not given
* @firstname- user's first name, empty string if not given
* @lastname- user's last name, empty string if not given
* @password- user's password, non-empty
*/

var mongoose = require('mongoose');
var path = require('path');
var Model = mongoose.model;

var ObjectId = mongoose.Types.ObjectId;

/** User Object */

var userModel = Model({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {            // Passport email (Facebook/Twitter) ??
    type: String,
    required: true,
    unique: true
  },
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
})

/** The User Object methods */
userModel.statics.validLogin = function(uname, passw, cb){
  this.find({username: uname, password: passw}, cb);
};

var User = mongoose.model('User', userModel);

module.exports = function(model){
  model.user = User;
};
