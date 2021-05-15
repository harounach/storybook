const { ensureAuth } = require("../middleware/auth");
const storyDAO = require("../dao/story.dao");
const errorHelper = require("../helpers/errorHelper");
const { body, validationResult } = require("express-validator");

/**
 * @description Public stories page route
 * @route GET /stories
 */
exports.stories = [
  ensureAuth,
  async function (req, res) {
    const stories = await storyDAO.getAllStories();
    res.render("stories", {
      layout: "main",
      page: "public-page",
      title: "All stories",
      stories: stories,
      loggedUser: req.user,
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
exports.postAddStory = [
  body("title", "Title must not be empty").not().isEmpty().escape(),
  body("body", "Body must not be empty").not().isEmpty().escape(),

  /* return json */
  async function (req, res) {
    const errors = validationResult(req);
    const { title, body, status } = req.body;

    // Data is invalid
    if (!errors.isEmpty()) {
      res.render("add-story", {
        layout: "main",
        page: "add-story-page",
        title: "Add story",
        titleField: title,
        bodyField: body,
        titleError: errorHelper.getErrorMessage(errors.array(), "title"),
        bodyError: errorHelper.getErrorMessage(errors.array(), "body"),
      });
    } else {
      // Data is valid, Create and add story to database
      try {
        const storyObj = { title, body, status, user: req.user.id };
        await storyDAO.addStory(storyObj);
        res.redirect("/dashboard");
      } catch (err) {
        console.error(err);
        res.redirect("/dashboard");
      }
    }
  },
];

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
