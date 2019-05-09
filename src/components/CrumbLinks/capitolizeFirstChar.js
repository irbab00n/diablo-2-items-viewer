/**
 * @param {String} string - string you want to capitolize the first character for
 * @returns {String} String will have the first letter capitolized
 */
module.exports = string => string[0].toUpperCase() + string.substr(1);