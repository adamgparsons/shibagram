const mainTag = document.querySelector("main");

const getShibas = function() {
  let shiba = "";
  fetch(
    "https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=5"
  )
    .then(displayPics => {
      return displayPics.json();
    })
    .then(data => {
      const convertArrayToObject = (array, key) =>
        array.reduce(
          (obj, item) => ({
            ...obj,
            [item[key]]: item
          }),
          {}
        );
      console.log(convertArrayToObject(data));

      //   console.log(test);
      //   data.forEach(imgUrl => {
      //     // Work with JSON data here
      //     const shibaPost = document.createElement("div");
      //     shibaPost.className = "shiba-post";
      //     mainTag.appendChild(shibaPost);

      //     const profileBar = document.createElement("div");
      //     profileBar.className = "profile-bar";
      //     shibaPost.appendChild(profileBar);

      //     const profileImgHolder = document.createElement("div");
      //     profileImgHolder.className = "profile-img-holder";
      //     profileBar.appendChild(profileImgHolder);

      //     const profileImg = document.createElement("div");
      //     profileImg.className = "profile-img";
      //     profileImgHolder.appendChild(profileImg);

      //     const profileDetails = document.createElement("div");
      //     profileDetails.className = "profile-details";
      //     profileBar.append(profileDetails);

      //     const shibaName = document.createElement("h2");
      //     shibaName.innerText = "Test Shiba Name";
      //     profileDetails.appendChild(shibaName);

      //     const shibaLocation = document.createElement("h3");
      //     shibaLocation.innerText = "Test Shiba Location";
      //     profileDetails.appendChild(shibaLocation);

      //     const imgFrame = document.createElement("div");
      //     imgFrame.className = "img-frame";
      //     shibaPost.appendChild(imgFrame);

      //     const mainImg = document.createElement("img");
      //     mainImg.className = "main-img";
      //     mainImg.src = imgUrl;
      //     imgFrame.appendChild(mainImg);
      //   });
    })
    .catch(err => {
      // Do something for an error here
    });
};

getShibas();
