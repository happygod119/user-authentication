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

module.exports = router;
