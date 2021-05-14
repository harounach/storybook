const { ensureAuth } = require("../middleware/auth");

/**
 * @description Public stories page route
 * @route GET /stories
 */
exports.stories = [
  ensureAuth,
  function (req, res) {
    res.render("stories", {
      layout: "main",
      page: "public-page",
      title: "All stories",
    });
  },
];

/**
 * @description Story page route
 * @route GET /stories/:id/view
 */
exports.story = [
  ensureAuth,
  function (req, res) {
    res.render("story", {
      layout: "main",
      page: "story-page",
      title: "Story 1",
    });
  },
];

/**
 * @description Add story page route
 * @route GET /stories/add
 */
exports.getAddStory = [
  ensureAuth,
  function (req, res) {
    res.render("add-story", {
      layout: "main",
      page: "add-story-page",
      title: "Add story",
    });
  },
];

/**
 * @description Add story page route
 * @route POST /stories/add
 */
exports.postAddStory = function (req, res) {
  res.redirect("/dashboard");
};

/**
 * @description Edit story page route
 * @route GET /stories/:id/edit
 */
exports.getEditStory = [
  ensureAuth,
  function (req, res) {
    res.render("edit-story", {
      layout: "main",
      page: "edit-story-page",
      title: "Edit story",
    });
  },
];

/**
 * @description Edit story page route
 * @route Post /stories/:id/edit
 */
exports.postEditStory = function (req, res) {
  res.redirect("/dashboard");
};
