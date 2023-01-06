const admin = require("firebase-admin");
const { ref } = require("firebase-functions/v1/database");

module.exports = function (req, res) {
  console.log("flag1", req.body);

  if (!req.body.phone || !req.body.code) {
    return res.status(422).send({ error: "Phone and code must be provided" });
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, "");
  const code = parseInt(req.body.code);

  admin
    .auth()
    .getUser(phone)
    .then(() => {
      admin
        .database()
        .ref("users/" + phone)
        .on("value", (snapshot) => {
          const user = snapshot.val();
          console.log("user", user);
          if (user.code != code || !user.codeValid) {
            return res.status(422).send({ error: "Code not valid" });
          }
          admin
            .database()
            .ref("users/" + phone)
            .update({ codeValid: false })
            .then(() => {
              admin
                .auth()
                .createCustomToken(phone)
                .then((token) => {
                  return res.send({ token });
                });
            });
        });
    })
    .catch((err) => res.status(422).send({ error: err }));
};
