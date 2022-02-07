const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  req.session.destroy(() => {
    console.log("session deleted");
  });
  const error =
    "成功登出";
  res.render("index", { error });
});

module.exports = router;
