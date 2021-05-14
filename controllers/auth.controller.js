const passport = require("passport");

/**
 * @description Log in with Google route
 * @route GET /auth/google
 */
exports.googleLogin = [passport.authenticate("google", { scope: ["profile"] })];

/**
 * @description Google auth callback route
 * @route GET /auth/google/callback
 */
exports.googleAuthCallback = [
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  },
];

/**
 * @description Log out route
 * @route GET /logout
 */
exports.logOut = function (req, res) {
  req.logout();
  req.session.destroy();
  res.redirect("/");
};
