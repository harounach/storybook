/**
 * @description Home page route
 * @route GET /
 */
exports.index = function (req, res) {
  res.render("home");
};

/**
 * @description Dashboard page route
 * @route GET /dashboard
 */
exports.dashboard = function (req, res) {
  res.send("Dashboard page");
};

/**
 * @description Public stories page route
 * @route GET /public
 */
exports.public = function (req, res) {
  res.send("Public stories page");
};

/**
 * @description Add story page route
 * @route GET /add-story
 */
exports.getAddStory = function (req, res) {
  res.send("Add story page");
};

/**
 * @description Add story page route
 * @route POST /add-story
 */
exports.postAddStory = function (req, res) {
  res.send("Post Add story");
};

/**
 * @description Edit story page route
 * @route GET /edit-story
 */
exports.getEditStory = function (req, res) {
  res.send("Edit story page");
};

/**
 * @description Edit story page route
 * @route Post /edit-story
 */
exports.postEditStory = function (req, res) {
  res.send("Post Edit story");
};

exports.logOut = function (req, res) {
  res.send("Log out");
};
