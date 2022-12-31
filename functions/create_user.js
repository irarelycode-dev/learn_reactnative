const admin = require("firebase-admin");

module.exports = (req, res) => {
  //verify if the user provides a phone number
  const phoneNumber = req.body.phone;
  if (!phoneNumber) {
    return res.status(422).send({ error: "Bad input" });
  }

  //format the phone number to remove the dashes
  const phone = String(phoneNumber).replace(/[^\d]/g, "");

  //create a new user account using that phone number
  admin
    .auth()
    .createUser({ uid: phone })
    .then((user) => res.send(user))
    .catch((err) => res.status(422).send({ error: err }));
};
