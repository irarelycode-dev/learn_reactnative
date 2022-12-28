const admin = require("firebase-admin");
const functions = require("firebase-functions");
const createUser = require("./create_user");
const requestOTP = require("./request_otp");
const verifyOneTimePassword = require("./verify_otp");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//

const serviceAccount = require("./one-time-password-8a4e1-firebase-adminsdk-jtqnl-2c160cac20.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://one-time-password-8a4e1-default-rtdb.asia-southeast1.firebasedatabase.app",
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.goodBye = functions.https.onRequest((request, response) => {
  response.send("goodbye function");
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOneTimePassword = functions.https.onRequest(requestOTP);
exports.verifyOneTimePassword = functions.https.onRequest(
  verifyOneTimePassword
);
