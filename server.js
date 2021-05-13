const express = require("express");
const exphbs = require("express-handlebars");

const storyRoute = require("./routes/story.route");

const app = express();

// Apply middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Handlebars setting
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Register routes
app.use("/", storyRoute);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
