import japanCities from "./japanCities.mjs";
import dogNames from "./dogNames.mjs";
const mainTag = document.querySelector("main");
const showMoreButton = document.querySelector(".show-more");

// Number of posts on page load/ onclick load show more
const numberOfPosts = 6;

// API url
const url = `https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=${numberOfPosts *
  2}`;

// feed of content
let feed;

showMoreButton.style.display = "none";

const getShibas = function() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // JSON data into two arrays
      // One for display pics
      const displayPics = data.slice(0, numberOfPosts);

      // One for post pics
      const postPics = data.slice(numberOfPosts, data.length);

      // create an array of objects
      const newFeed = displayPics.map(displayPic => {
        const postNumber = displayPics.indexOf(displayPic);

        // Generate random dog name
        const dogName = dogNames[Math.floor(Math.random() * dogNames.length)];

        // Generate random dog location
        const postLocation =
          japanCities[Math.floor(Math.random() * japanCities.length)] +
          ", Japan";

        // populate the object
        const postObj = {};
        postObj.displayPic = displayPics[postNumber];
        postObj.postPic = postPics[postNumber];
        postObj.dogName = dogName;
        postObj.postLocation = postLocation;
        return postObj;
      });

      // If there's already content in the feed
      // concatenate it
      if (feed) {
        feed = feed.concat(newFeed);
      } else {
        feed = newFeed;
      }
      displayFeed();
    });
};

const displayFeed = function() {
  feed.forEach(feedItem => {
    const post = `
    <div class="shiba-post">
      <div class="profile-bar">
        <div class="profile-img-holder">
          <div class="profile-img" style="background-image: url(${feedItem.displayPic});"></div>
        </div>
        <div class="profile-details">
          <h2>${feedItem.dogName}</h2>
          <h3>${feedItem.postLocation}</h3>
        </div>
      </div>
      <div class="img-frame">
        <img class="main-img" src="${feedItem.postPic}">
      </div>
    </div>
    `;
    mainTag.innerHTML = mainTag.innerHTML + post;
  });
  // display show more button
  showMoreButton.style.display = "block";
};

getShibas();

showMoreButton.addEventListener("click", getShibas);
