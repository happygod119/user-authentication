const express = require("express");
const router = express.Router();

const User = require("../../models/user");

router.post("/", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ $and: [{ email }, { password }] })
    .lean()
    .then((user) => {
      if (!user) {
        const error = "Email或Password錯誤";
        res.render("index", { email, error });
      } else {
        res.render("success", { firstName: user.firstName });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/", (req, res) => {
  if (req.session.isLoggedIn) {
    const firstName = req.session.name;
    res.render("detail", { firstName });
    console.log("logged in");
  } else {
    res.redirect("/");
    console.log("logged failed");
  }
});

module.exports = router;
