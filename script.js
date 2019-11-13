fetch(
  "https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=5"
)
  .then(response => {
    return response.json();
  })
  .then(data => {
    // Work with JSON data here
    console.log("data", data);
  })
  .catch(err => {
    // Do something for an error here
  });
