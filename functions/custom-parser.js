const bodyParser = require("body-parser");

const customParser = bodyParser.json({
  type: function (req) {
    if (req.headers["content-type"] === "") {
      return (req.headers["content-type"] = "application/json");
    } else if (typeof req.headers["content-type"] === "undefined") {
      return (req.headers["content-type"] = "application/json");
    } else {
      return (req.headers["content-type"] = "application/json");
    }
  },
});

module.exports = customParser;
