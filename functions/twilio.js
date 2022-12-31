const twilio = require("twilio");
const twilioAccount = require("./twilio_credentials");

module.exports = new twilio.Twilio(
  twilioAccount.accountSID,
  twilioAccount.authToken
);
