var fs = require("fs");

module.exports = {
  cert: fs.readFileSync(__dirname + "/server.crt"),
  key: fs.readFileSync(__dirname + "/server.key")
}
