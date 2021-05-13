const { Router } = require("express");
const router = Router();

const authController = require("../controllers/auth.controller");

/**
 * @description Log out route
 * @route Post /logout
 */
router.route("/logout").post(authController.logOut);

module.exports = router;
