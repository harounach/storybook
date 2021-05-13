const { Router } = require("express");
const router = Router();

const indexController = require("../controllers/index.controller");

/**
 * @description Home page route
 * @route GET /
 */
router.route("/").get(indexController.index);

/**
 * @description Dashboard page route
 * @route GET /dashboard
 */
router.route("/dashboard").get(indexController.dashboard);

module.exports = router;
