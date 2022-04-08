const { Router } = require("express");
const router = Router();

const authController = require("../controllers/auth.controller");

/**
 * @description Log in with Google route
 * @route GET /auth/google
 */
router.route("/google").get(authController.googleLogin);

/**
 * @description Google auth callback route
 * @route GET /auth/google/callback
 */
router.route("/google/callback").get(authController.googleAuthCallback);

/**
 * @description Log out route
 * @route GET /logout
 */
router.route("/logout").get(authController.logOut);

module.exports = router;
