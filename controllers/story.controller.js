const { ensureAuth, ensureOwner } = require("../middleware/auth");
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
  async function (req, res) {
    const id = req.params.id;
    const story = await storyDAO.getStory(id);
    res.render("story", {
      layout: "main",
      page: "story-page",
      title: story.title,
      story: story,
      loggedUser: req.user,
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
      status: "public",
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
        status: status,
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
  ensureOwner,
  async function (req, res) {
    const id = req.params.id;
    const story = await storyDAO.getStory(id);
    res.render("edit-story", {
      layout: "main",
      page: "edit-story-page",
      title: "Edit story",
      titleField: story.title,
      bodyField: story.body,
      status: story.status,
    });
  },
];

/**
 * @description Edit story page route
 * @route Post /stories/:id/edit
 */
exports.postEditStory = [
  body("title", "Title must not be empty").not().isEmpty().escape(),
  body("body", "Body must not be empty").not().isEmpty().escape(),
  async function (req, res) {
    const errors = validationResult(req);
    const { title, body, status } = req.body;
    const id = req.params.id;

    // Data is invalid
    if (!errors.isEmpty()) {
      res.render("edit-story", {
        layout: "main",
        page: "edit-story-page",
        title: "Edit story",
        titleField: title,
        bodyField: body,
        titleError: errorHelper.getErrorMessage(errors.array(), "title"),
        bodyError: errorHelper.getErrorMessage(errors.array(), "body"),
        status: status,
      });
    } else {
      // Data is valid, update the story
      try {
        const storyObj = { title, body, status, user: req.user.id };
        await storyDAO.editStory(id, storyObj);
        res.redirect("/dashboard");
      } catch (err) {
        console.error(err);
        res.redirect("/dashboard");
      }
    }
  },
];

/**
 * @description Remove story route
 * @route GET /stories/:id/delete
 */
exports.deleteStory = [
  ensureAuth,
  ensureOwner,
  async function (req, res) {
    try {
      const id = req.params.id;
      await storyDAO.deleteStory(id);
      res.redirect("/dashboard");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard");
    }
  },
];
