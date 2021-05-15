const { Router } = require("express");
const router = Router();

const storyController = require("../controllers/story.controller");

/**
 * @description Public stories page route
 * @route GET /stories
 */
router.route("/").get(storyController.stories);

/**
 * @description Story page route
 * @route GET /stories/:id/view
 */
router.route("/:id/view").get(storyController.story);

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
 * @route GET /stories/:id/edit
 */
router.route("/:id/edit").get(storyController.getEditStory);

/**
 * @description Edit story page route
 * @route Post /stories/:id/edit
 */
router.route("/:id/edit").post(storyController.postEditStory);

/**
 * @description Remove story route
 * @route GET /stories/:id/delete
 */
router.route("/:id/delete").get(storyController.deleteStory);

module.exports = router;
