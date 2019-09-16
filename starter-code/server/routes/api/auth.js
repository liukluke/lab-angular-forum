const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) { return res.status(401).json(err); }
    if (!user) { return res.status(401).json(info); }

    req.login(user, (err) => {
      if (err) { return res.status(500).json({ message: "Something went wrong" }); }
      return res.status(200).json(req.user);
    });
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  if (username === "" || email === "" || password === "") {
    res.render("auth/signup", { message: "Provide all the fields to sign up" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashPass
    });

    console.log(newUser);

    newUser.save()
      .then((user) => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(400).json({ message: "Something went wrong" });
      })
  });
});

router.post("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "Success" });
});

router.get("/loggedin", (req, res) => {
  if (req.isAuthenticated()) { res.status(200).json(req.user); return; }
  return res.status(403).json({ message: "Unauthorized" });
});

module.exports = router;
