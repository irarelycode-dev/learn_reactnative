const express = require("express");
const router = express.Router();

//handlers
const createUser = require("./create_user");
const requestOTP = require("./request_otp");
const verifyOneTimePassword = require("./verify_otp");

router.post("/createUser", createUser);
router.post("/requestOTP", requestOTP);
router.post("/verifyOTP", verifyOneTimePassword);

module.exports = router;
