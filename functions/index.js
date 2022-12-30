const admin = require("firebase-admin");
const functions = require("firebase-functions");
const express = require("express");
const serviceAccount = require("./one-time-password-8a4e1-firebase-adminsdk-jtqnl-2c160cac20.json");

//routers
const router = require("./router");

const app = express();

app.use(express.json());

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://one-time-password-8a4e1-default-rtdb.asia-southeast1.firebasedatabase.app",
});

app.use(router);

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.goodBye = functions.https.onRequest((request, response) => {
  response.send("goodbye function");
});

// exports.createUser = functions.https.onRequest(createUser);
// exports.requestOneTimePassword = functions.https.onRequest(requestOTP);
// exports.verifyOneTimePassword = functions.https.onRequest(
//   verifyOneTimePassword
// );

exports.router = functions.https.onRequest(app);
