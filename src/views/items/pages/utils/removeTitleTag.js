const titleTag = require('./titleTag');

/**
 * Removes Title tag from a given string
 * @param {String} string - Content string block including Title tag
 * @returns {String} - Returns the content block without the Title tag, or the string directly if no title tag was found
 */
const removeTitleTag = string => string.includes(titleTag) ? string.split(titleTag)[1] : string;

module.exports = removeTitleTag;