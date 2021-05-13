const { Router } = require("express");
const router = Router();

const storyController = require("../controllers/story.controller");

/**
 * @description Public stories page route
 * @route GET /stories
 */
router.route("/").get(storyController.stories);

/**
 * @description Add story page route
 * @route GET /stories/add
 */
router.route("/add").get(storyController.getAddStory);

/**
 * @description Add story page route
 * @route POST /stories/add
 */
router.route("/add").post(storyController.postAddStory);

/**
 * @description Edit story page route
 * @route GET /stories/edit
 */
router.route("/edit").get(storyController.getEditStory);

/**
 * @description Edit story page route
 * @route Post /stories/edit
 */
router.route("/edit").post(storyController.postEditStory);

module.exports = router;
