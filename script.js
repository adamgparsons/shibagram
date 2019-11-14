import japanCities from "./japanCities.mjs";
import dogNames from "./dogNames.mjs";
const mainTag = document.querySelector("main");

const getShiba = function() {
  let displayPic = "";
  let postPic = "";
  const dogName = dogNames[Math.floor(Math.random() * dogNames.length)];
  const postLocation =
    japanCities[Math.floor(Math.random() * japanCities.length)] + ", Japan";
  console.log(postLocation);
  fetch("https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?")
    .then(result => {
      return result.json();
    })
    .then(jsonData => {
      displayPic = jsonData.toString();
      console.log(displayPic);
    });
  fetch("https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?")
    .then(result => {
      return result.json();
    })
    .then(jsonData => {
      postPic = jsonData.toString();
    })
    .then(() => {
      if (displayPic.length > 0) {
        generatePost(displayPic, postPic, dogName, postLocation);
      }
    })
    .catch(err => {
      // Do something for an error here
    });

  const generatePost = function(
    displayPicUrl,
    postPicUrl,
    dogName,
    postLocation
  ) {
    const shibaPost = document.createElement("div");
    shibaPost.className = "shiba-post";
    mainTag.appendChild(shibaPost);

    const profileBar = document.createElement("div");
    profileBar.className = "profile-bar";
    shibaPost.appendChild(profileBar);

    const profileImgHolder = document.createElement("div");
    profileImgHolder.className = "profile-img-holder";
    profileBar.appendChild(profileImgHolder);

    const profileImg = document.createElement("div");
    profileImg.className = "profile-img";
    profileImg.style.backgroundImage = `url(${displayPicUrl})`;
    profileImgHolder.appendChild(profileImg);

    const profileDetails = document.createElement("div");
    profileDetails.className = "profile-details";
    profileBar.append(profileDetails);

    const shibaName = document.createElement("h2");
    shibaName.innerText = dogName;
    profileDetails.appendChild(shibaName);

    const shibaLocation = document.createElement("h3");
    shibaLocation.innerText = postLocation;
    profileDetails.appendChild(shibaLocation);

    const imgFrame = document.createElement("div");
    imgFrame.className = "img-frame";
    shibaPost.appendChild(imgFrame);

    const mainImg = document.createElement("img");
    mainImg.className = "main-img";
    mainImg.src = postPicUrl;
    imgFrame.appendChild(mainImg);
  };
};

for (var i = 0; i < 7; i++) {
  getShiba();
}
