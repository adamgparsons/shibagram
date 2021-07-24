const express = require("express");
const routes = require("./routes");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use("/", routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/dist/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
