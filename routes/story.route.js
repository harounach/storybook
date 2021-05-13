const { Router } = require("express");
const router = Router();

const storyController = require("../controllers/story.controller");

/**
 * @description Home page route
 * @route GET /
 */
router.route("/").get(storyController.index);

/**
 * @description Dashboard page route
 * @route GET /dashboard
 */
router.route("/dashboard").get(storyController.dashboard);

/**
 * @description Public stories page route
 * @route GET /public
 */
router.route("/public").get(storyController.public);

/**
 * @description Add story page route
 * @route GET /add-story
 */
router.route("/add-story").get(storyController.getAddStory);

/**
 * @description Add story page route
 * @route POST /add-story
 */
router.route("/add-story").post(storyController.postAddStory);

/**
 * @description Edit story page route
 * @route GET /edit-story
 */
router.route("/edit-story").get(storyController.getEditStory);

/**
 * @description Edit story page route
 * @route Post /edit-story
 */
router.route("/edit-story").post(storyController.postEditStory);

/**
 * @description Log out route
 * @route Post /logout
 */
router.route("/logout").post(storyController.logOut);

module.exports = router;
