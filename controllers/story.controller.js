/**
 * @description Public stories page route
 * @route GET /stories
 */
exports.stories = function (req, res) {
  res.render("stories");
};

/**
 * @description Story page route
 * @route GET /stories/:id/view
 */
exports.story = function (req, res) {
  res.render("story");
};

/**
 * @description Add story page route
 * @route GET /stories/add
 */
exports.getAddStory = function (req, res) {
  res.render("add-story");
};

/**
 * @description Add story page route
 * @route POST /stories/add
 */
exports.postAddStory = function (req, res) {
  res.send("Post Add story");
};

/**
 * @description Edit story page route
 * @route GET /stories/:id/edit
 */
exports.getEditStory = function (req, res) {
  res.render("edit-story");
};

/**
 * @description Edit story page route
 * @route Post /stories/:id/edit
 */
exports.postEditStory = function (req, res) {
  res.send("Post Edit story");
};
