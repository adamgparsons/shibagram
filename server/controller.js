const fetch = require("node-fetch");
const postData = require("./postData");

exports.shiba_get = (req, res, next) => {
  const shibasRequested = Number(req.params.count);
  const url = `http://shibe.online/api/shibes?count=${shibasRequested * 2}`;

  const dogNames = postData.dogNames;
  const japanCities = postData.japanCities;

  fetch(url)
    .then((response) => response.json())
    .then((shibaImageUrls) => {
      // JSON data into two arrays
      // One for display pics
      const displayPics = shibaImageUrls.slice(0, shibasRequested);
      // One for post pics
      const postPics = shibaImageUrls.slice(
        shibasRequested,
        shibaImageUrls.length
      );

      const shibaData = displayPics.map((displayPic) => {
        const postNumber = displayPics.indexOf(displayPic);

        return {
          displayPic: displayPics[postNumber],
          postPic: postPics[postNumber],
          dogName: dogNames[Math.floor(Math.random() * dogNames.length)],
          postLocation:
            japanCities[Math.floor(Math.random() * japanCities.length)] +
            ", Japan",
        };
      });
      res.send(shibaData);
    })
    .catch((err) => next(err));
};
