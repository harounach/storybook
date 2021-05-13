/**
 * @description Public stories page route
 * @route GET /stories
 */
exports.stories = function (req, res) {
  res.render("stories", {
    layout: "main",
    page: "public-page",
    title: "All stories",
  });
};

/**
 * @description Story page route
 * @route GET /stories/:id/view
 */
exports.story = function (req, res) {
  res.render("story", {
    layout: "main",
    page: "story-page",
    title: "Story 1",
  });
};

/**
 * @description Add story page route
 * @route GET /stories/add
 */
exports.getAddStory = function (req, res) {
  res.render("add-story", {
    layout: "main",
    page: "add-story-page",
    title: "Add story",
  });
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
  res.render("edit-story", {
    layout: "main",
    page: "edit-story-page",
    title: "Edit story",
  });
};

/**
 * @description Edit story page route
 * @route Post /stories/:id/edit
 */
exports.postEditStory = function (req, res) {
  res.send("Post Edit story");
};
