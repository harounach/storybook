const User = require("../models/User");

exports.addUser = async function (userObj) {
  const newUser = User(userObj);
  return await newUser.save();
};

exports.getUser = async function (id) {
  return await User.findById(id);
};
