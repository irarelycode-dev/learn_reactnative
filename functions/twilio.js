const twilio = require("twilio");
const { accountSID, authToken } = require("./twilio_credentials");

module.exports = new twilio.Twilio(accountSID, authToken);
