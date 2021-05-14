const { Router } = require("express");
const router = Router();

const apiController = require("../controllers/api.controller");

/**
 * @route GET /api/dashboard
 */
router.route("/dashboard").get(apiController.dashboard);

/**
 * @route GET /api/stories
 */
router.route("/stories").get(apiController.stories);

/**
 * @route GET /api/stories/:id/view
 */
router.route("/stories/:id/view").get(apiController.story);

/**
 * @route POST /api/stories/add
 */
router.route("/stories/add").post(apiController.postAddStory);

/**
 * @route GET /api/stories/:id/edit
 */
router.route("/stories/:id/edit").get(apiController.getEditStory);

/**
 * @route POST /api/stories/:id/edit
 */
router.route("/stories/:id/edit").post(apiController.postEditStory);

module.exports = router;
