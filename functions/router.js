const express = require("express");
const router = express.Router();

//handlers
const createUser = require("./create_user");
const requestOTP = require("./request_otp");
const verifyOneTimePassword = require("./verify_otp");

//utilities
const customParser = require("./custom-parser");

router.post("/createUser", customParser, createUser);
router.post("/requestOTP", customParser, requestOTP);
router.post("/verifyOTP", customParser, verifyOneTimePassword);

module.exports = router;
