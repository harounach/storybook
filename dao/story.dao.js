const Story = require("../models/Story");

exports.addStory = async function (storyObj) {
  const newStory = new Story(storyObj);
  return await newStory.save();
};

exports.editStory = async function (id, updateObj) {
  return await Story.findOneAndUpdate({ _id: id }, updateObj, {
    new: true,
    runValidators: true,
  });
};

exports.deleteStory = async function (id) {
  return await Story.findOneAndRemove({ _id: id });
};

exports.getAllStories = async function () {
  return await Story.find({ status: "public" })
    .populate("user")
    .sort({ createdAt: "desc" })
    .lean();
};

exports.getUserStories = async function (userId) {
  return await Story.find({ user: userId })
    .populate("user")
    .sort({ createdAt: "desc" })
    .lean();
};

exports.getStory = async function (id) {
  return await Story.findById(id).populate("user").lean();
};
