const express = require("express");
const router = express.Router();
const User = require("../Models/user");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");

router.post("/authenticate", (req, res) => {
  //First get username and password from the from
  const username = req.body.username;
  const password = req.body.password;

  //Call our function getUserbyUsername
  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;

    //If user not found
    if (!user) {
      return res.json({ success: false, msg: "User not found" });
    }
    //method to compare password
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      //If the isMatch is true, meaning passwords match, then get the token
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800, // set expiration date
        });
        //Display message to user stating login successful
        res.json({
          success: true,
          token: "JWT " + token,
          //Pass the revalent userinfo to the user
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
          },
        });
      } else {
        //if user enters the wrong passport
        return res.json({ success: false, msg: "Wrong Password" });
      }
    });
  });
});

router.post("/register", (req, res, next) => {
  //Create a new user, and get the user info from the register form
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  //Function that adds user and display revalent message upon registering
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({ success: false, msg: "Failed to register user" });
    } else {
      res.json({ success: true, msg: "User Registered Successfully" });
    }
  });
});

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.send({ user: req.user });
  }
);

module.exports = router;
