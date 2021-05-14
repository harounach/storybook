const { render } = require("sass");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const storyDAO = require("../dao/story.dao");

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
  async function (req, res) {
    try {
      const stories = await storyDAO.getAllStories();

      res.render("dashboard", {
        layout: "main",
        page: "dashboard-page",
        title: "Dashboard",
        stories: stories,
      });
    } catch (err) {
      console.error(err);
    }
  },
];
