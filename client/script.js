import japanCities from "./japanCities.mjs";
import dogNames from "./dogNames.mjs";
const mainTag = document.querySelector("main");
const showMoreButton = document.querySelector(".show-more");

// Number of posts on page load/ onclick load show more
const numberOfPosts = 6;

// API url
const url =
  window.location.hostname === "localhost"
    ? `http://localhost:3000/count=${numberOfPosts * 2}`
    : `https://shibagram.herokuapp.com/count=${numberOfPosts * 2}`;

showMoreButton.style.display = "none";

const getShibas = function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayFeed(data);
    });
};

const displayFeed = function (feed) {
  feed.forEach((feedItem) => {
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
