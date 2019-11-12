const getShibas = function() {
  fetch("https://cors.io/https://shibe.online/api/shibes?count=5")
    .then(response => response.json())
    .then(jsonData => console.log(jsonData));
};

getShibas();
