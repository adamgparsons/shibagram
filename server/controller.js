const https = require("https");
const request = require("request");

// Need to determine what output from the backend

exports.shiba_get = (req, res, next) => {
  const numberRequested = Number(req.params.count);
  const url = `http://shibe.online/api/shibes?count=${numberRequested * 2}`;

  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(response.body);
    }
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: "error", message: err.message });
    }
  });
};
