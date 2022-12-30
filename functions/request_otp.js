const admin = require("firebase-admin");
const twilio = require("./twilio");
const { phoneNumber } = require("./twilio_credentials");

module.exports = function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  if (!req.body.phone) {
    return res.status(422).send({ error: "You must provide a phone number" });
  }
  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  admin
    .auth()
    .getUser(phone)
    .then((userRecord) => {
      const code = Math.floor(Math.random() * 8999 + 1000);
      twilio.messages.create(
        {
          body: "Your code is " + code,
          to: phone,
          from: phoneNumber,
        },
        (err) => {
          if (err) {
            return res.status(422).send(err);
          }
          admin
            .database()
            .ref("users/" + phone)
            .update({ code: code, codeValid: true }, () => {
              return res.status(200).send({ success: true });
            });
        }
      );
    })
    .catch((error) => {
      console.log(">>.error", error);
      res.status(422).send({ error: "User not found" });
    });
};
