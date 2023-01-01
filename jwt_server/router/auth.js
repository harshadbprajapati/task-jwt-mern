const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/schema");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const auth_m = require("../middleware/auth_m");

router.get('/', (req, res) => {
    res.send("hello hiya router");
});

router.get('/About',auth_m, (req, res) => {
  console.log("hello after authenticate");
    res.send(req.root_user);
});


router.post('/signup', async (req, res) => {

    const { fullname, email, username, user_password } = req.body;

    if (!fullname || !email || !username || !user_password) {
        return res.status(422).json({ error: "please fill the field properly" });
    }
    try {
        const userexist = await User.findOne({ email: email })
        if (userexist) {
            return res.status(422).json({ error: "Email is already exist" });
        }
        const user = new User({ fullname, email, username, user_password });

        const token = await user.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken",token,{
          expires: new Date(Date.now()+ 86400000),
          httpOnly:true
        });
        //console.log(cookie);

        await user.save();
        res.status(201).json({ message: "data stored successfully" });
    } catch (err) {
        console.log(err);
    }
});


router.post("/login", async (req, res) => {
    try {
      const username = req.body.username;
      const user_password = req.body.user_password;
      if (!username || !user_password) {
        return res.status(400).json({ error: "plz fill it" });
      }
      const username_final = await User.findOne({ username: username});
      if (username_final) {
        const isMatch = await bcrypt.compare(
            user_password, username_final.user_password);
                
            const token = await username_final.generateAuthToken();
            console.log(token);
               
            res.cookie("jwtoken",token,{
              expires: new Date(Date.now()+86400000),
              httpOnly:true
            });
        if (!isMatch) {
          console.log("e");
          res.status(400).json({ error: "Invalid" });
        } else {
          res.status(201).json({ message: "log in successfully" });
        }
      } else {
        res.status(400).json({ error: "Invalid details" });
      }
      //console.log(userename_final);
    } catch (err) {
      console.log(err);
    }
  });

  router.get('/Logout',(req, res) => {
    console.log("hello after logout");
    res.clearCookie("jwtoken", { path:"/"});
    res.status(200).send("user logout");
    console.log("logout finish ");
  });

module.exports = router;