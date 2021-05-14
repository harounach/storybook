const { ensureAuth, ensureGuest } = require("../middleware/auth");

/**
 * @description Home page route
 * @route GET /
 */
exports.index = [
  ensureGuest,
  function (req, res) {
    res.render("home", { layout: "home", page: "home-page", title: "Home" });
  },
];

/**
 * @description Dashboard page route
 * @route GET /dashboard
 */
exports.dashboard = [
  ensureAuth,
  function (req, res) {
    res.render("dashboard", {
      layout: "main",
      page: "dashboard-page",
      title: "Dashboard",
    });
  },
];
