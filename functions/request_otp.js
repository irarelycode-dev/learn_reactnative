const admin = require("firebase-admin");
const twilio = require("./twilio");
const twilioAccount = require("./twilio_credentials");

const { getDatabase, ref, set } = require("firebase/database");

module.exports = function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  const phoneNumber = req.body.phone;
  if (!phoneNumber) {
    return res.status(422).send({ error: "You must provide a phone number" });
  }
  const phone = String(phoneNumber).replace(/[^\d]/g, "");

  admin
    .auth()
    .getUser(phone)
    .then((userRecord) => {
      const code = Math.floor(Math.random() * 8999 + 1000);
      twilio.messages.create(
        {
          body: "Your code is " + code,
          to: phone,
          from: twilioAccount.twilioPhoneNumber,
        },
        (err) => {
          if (err) {
            return res.status(422).send(err);
          }
          // admin
          //   .database()
          //   .ref("users/" + phone)
          //   .update({ code: code, codeValid: true }, () => {
          //     return res.status(200).send({ success: true });
          //   })
          //   .then((record) => {
          //     console.log("record", record);
          //   })
          //   .catch((error) => {
          //     console.log("otp error", error);
          //   });
          // firebase
          //   .database().
        }
      );
    })
    .catch((error) => {
      console.log(">>.error", error);
      res.status(422).send({ error: "User not found" });
    });
};
