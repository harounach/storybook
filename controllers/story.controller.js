/**
 * @description Public stories page route
 * @route GET /stories
 */
exports.stories = function (req, res) {
  res.send("Public stories page");
};

/**
 * @description Add story page route
 * @route GET /stories/add
 */
exports.getAddStory = function (req, res) {
  res.send("Add story page");
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
 * @route GET /stories/edit
 */
exports.getEditStory = function (req, res) {
  res.send("Edit story page");
};

/**
 * @description Edit story page route
 * @route Post /stories/edit
 */
exports.postEditStory = function (req, res) {
  res.send("Post Edit story");
};
