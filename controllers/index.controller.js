/**
 * @description Home page route
 * @route GET /
 */
exports.index = function (req, res) {
  res.render("home", { layout: "home", page: "home-page", title: "Home" });
};

/**
 * @description Dashboard page route
 * @route GET /dashboard
 */
exports.dashboard = function (req, res) {
  res.render("dashboard", {
    layout: "main",
    page: "dashboard-page",
    title: "Dashboard",
  });
};
