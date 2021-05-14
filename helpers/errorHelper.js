/**
 * @typedef ErrorEntry
 * @property {string} msg
 * @property {string} param
 * @property {string} location
 */

/**
 * Get error message
 * @param {Array<ErrorEntry>} errors
 * @param {string} param
 */
exports.getErrorMessage = function (errors, param) {
  const errorArr = errors.filter((err) => err.param === param);
  if (errorArr.length > 0) {
    return errorArr[0].msg;
  }
  return "";
};
