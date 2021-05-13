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
