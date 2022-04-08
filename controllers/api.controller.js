const storyDAO = require("../dao/story.dao");
const { body, validationResult } = require("express-validator");

/**
 * @route GET /api/dashboard
 */
exports.dashboard = [
  async function (req, res) {
    try {
      const id = "609e56c452418715acd7d2f2";
      const stories = await storyDAO.getUserStories(id);
      res.json({ stories: stories });
    } catch (err) {
      console.error(err);
      res.json({ error: "Something went wrong!" });
    }
  },
];

/**
 * @route GET /api/stories
 */
exports.stories = [
  async function (req, res) {
    try {
      const stories = await storyDAO.getAllStories();
      res.json({ stories: stories });
    } catch (err) {
      console.error(err);
      res.json({ error: "Something went wrong!" });
    }
  },
];

/**
 * @route GET /api/stories/:id/view
 */
exports.story = [
  async function (req, res) {
    try {
      const id = req.params.id;
      const story = await storyDAO.getStory(id);
      res.json({ story: story });
    } catch (err) {
      console.error(err);
      res.json({ error: "Something went wrong!" });
    }
  },
];

/**
 * @route POST /api/stories/add
 */
exports.postAddStory = [
  body("title", "Title must not be empty").not().isEmpty().escape(),
  body("body", "Body must not be empty").not().isEmpty().escape(),
  body("status", "Status must not be empty").not().isEmpty().escape(),

  /* return json */
  async function (req, res) {
    const errors = validationResult(req);

    // Data is invalid
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      // Data is valid, Create and add story to database
      const { title, body, status } = req.body;

      res.json({ title: title, body: body, status: status });
    }
  },
];

/**
 * @route GET /api/stories/:id/edit
 */
exports.getEditStory = [
  async function (req, res) {
    try {
      const id = req.params.id;
      const story = await storyDAO.getStory(id);
      res.json({ story: story });
    } catch (err) {
      console.error(err);
      res.json({ error: "Something went wrong!" });
    }
    res.json({ message: "Edit story" });
  },
];

/**
 * @route POST /api/stories/:id/edit
 */
exports.postEditStory = [
  body("title", "Title must not be empty").not().isEmpty().escape(),
  body("body", "Body must not be empty").not().isEmpty().escape(),
  body("status", "Status must not be empty").not().isEmpty().escape(),

  /* return json */
  async function (req, res) {
    const errors = validationResult(req);

    // Data is invalid
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      // Data is valid, Create and add story to database
      const { title, body, status } = req.body;

      res.json({ title: title, body: body, status: status });
    }
  },
];
