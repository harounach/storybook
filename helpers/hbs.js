module.exports = {
  truncate: function (str, len) {
    if (str.length > len && str.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  },
  stripTags: function (input) {
    return input.replace(/<(?:.|\n)*?>/gm, "");
  },
  editIcon: function (storyUser, loggedUser, storyId, floating = true) {
    if (storyUser._id.toString() == loggedUser._id.toString()) {
      if (floating) {
        return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`;
      } else {
        return `<a href="/stories/edit/${storyId}"><i class="fas fa-edit"></i></a>`;
      }
    } else {
      return "";
    }
  },
  isOwner: function (storyUser, loggedUser) {
    return storyUser._id.toString() == loggedUser._id.toString();
  },
  isPrivateStory: function (status) {
    if (status === "private") {
      return "story__status--private";
    }

    return "";
  },
  statusChecked: function (status, currentStatus) {
    if (status === currentStatus) {
      return "checked";
    }

    return "";
  },
  /**
   * @param {string} text
   */
  capitalize: function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  },
};
