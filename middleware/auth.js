const storyDAO = require("../dao/story.dao");

module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/dashboard");
    }
  },
  ensureOwner: async function (req, res, next) {
    const id = req.params.id;
    const loggedUser = req.user;
    try {
      const story = await storyDAO.getStory(id);
      if (story.user._id.toString() == loggedUser._id.toString()) {
        return next();
      } else {
        res.redirect("/dashboard");
      }
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard");
    }
  },
};
