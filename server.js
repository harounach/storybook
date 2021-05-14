const express = require("express");
const exphbs = require("express-handlebars");
const favicon = require("serve-favicon");
const path = require("path");

const mongoConfig = require("./database/mongoConfig");

const indexRoute = require("./routes/index.route");
const storyRoute = require("./routes/story.route");
const authRoute = require("./routes/auth.route");

const app = express();

// Apply middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Handlebars setting
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Connect to database
mongoConfig.configure();

// Register routes
app.use("/", indexRoute);
app.use("/stories", storyRoute);
app.use("/auth", authRoute);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
