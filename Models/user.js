const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/database");

// Create the user schema for register functionality
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Export the schema
const User = (module.exports = mongoose.model("User", userSchema));

//Function that finds user by Id=> calls mongodb findByid function
module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
};

//function that finds user by username
module.exports.getUserByUsername = function (username, callback) {
  const query = { username: username };
  User.findOne(query, callback);
};

//function to encrypt user password by adding salt, and then hashing
module.exports.addUser = function (newUser, callback) {
  //generate random key using salt
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash; //store in newUser
      newUser.save(callback); // store in mongodb
    });
  });
};

module.exports.comparePassword = function (canidatePassword, hash, callback) {
  bcrypt.compare(canidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};
