const express = require("express");
const routes = require("./routes");
const path = require("path");
const middleware = require("./middleware");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use("/api", routes);

app.use(
  "/",
  express.static(path.join(__dirname, "/../client/dist/index.html"))
);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
