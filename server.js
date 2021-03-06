if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
const express = require("express");
const exphbs = require("express-handlebars");
const favicon = require("serve-favicon");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");

const mongoConfig = require("./database/mongoConfig");
const passportConfig = require("./auth/passportConfig");

const indexRoute = require("./routes/index.route");
const storyRoute = require("./routes/story.route");
const authRoute = require("./routes/auth.route");
const apiRoute = require("./routes/api.route");

// Handlebars helpers
const {
  truncate,
  stripTags,
  isOwner,
  capitalize,
  isPrivateStory,
  statusChecked,
} = require("./helpers/hbs");

const PORT = process.env.PORT || 3000;

const app = express();

// Apply middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
// Sessions
app.use(
  session({
    secret: "keyboard cats",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      collectionName: "storybook_sessions",
    }),
  })
);

// Handlebars setting
app.engine(
  "handlebars",
  exphbs({
    helpers: {
      truncate,
      stripTags,
      isOwner,
      capitalize,
      isPrivateStory,
      statusChecked,
    },
  })
);
app.set("view engine", "handlebars");

// Connect to database
mongoConfig.configure();

// configure passport
passportConfig.configure(passport);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Set global var
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

// Register routes
app.use("/", indexRoute);
app.use("/stories", storyRoute);
app.use("/auth", authRoute);
app.use("/api", apiRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
