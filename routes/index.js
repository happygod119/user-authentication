const express = require("express");
const router = express.Router();

const home = require("./modules/home");
const login = require("./modules/login");
const logout = require("./modules/logout");

router.use("/", home);
router.use("/users", login);
router.use("/logout", logout);

module.exports = router;
