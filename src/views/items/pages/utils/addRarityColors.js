const React = require('react');
const rarityTags = require('./rarityTags');
const rarityKeys = Object.keys(rarityTags);


/**
 * @function addRarityColors
 * @description 
 * Wraps individual page content string words marked with item rarity tags in
 * JSX originated span elements with text color formatting class names.
 * Will iterate through all of the rarity keys, performing an operation on the current state of the sentence.
 * This is where use the 'current' rarity key
 * The sentence can be either in string format or Array format while being processed.
 * formatRarityTagsInString will return an Array regardless of it it finds a match or not.
 * formatRarityTagsInArray will return an Array where all of the values in that array where screened for the current tag.
 * @param {String} sentence Page content string which may or may not contain item rarity tags
 * @returns {String | [String | JSX.Element]} Returns a string if no tags were found.  Returns an array of Strings and JSX elements if tags were found.
 * @author Thomas Cosby
 */
module.exports.addRarityColors = sentence => {
  return rarityKeys.reduce((currentFormat, currentTag) => {
    return Array.isArray(currentFormat) ?
      formatRarityTagsInArray(currentFormat, rarityTags[currentTag]) :
      typeof currentFormat === 'string' ?
        formatRarityTagsInString(currentFormat, rarityTags[currentTag]) :
        currentFormat; // If the type is neither an Array or a String, simply return the currentFormat
  }, sentence);
};



/**
 * @function wrapFragmentInSpan
 * @description Constructs a span JSX Element, using the supplied tag as the class name varient.
 * Formats the fragment by removing the * character from both the beginning and end of the fragment.
 * @param {String} fragment Word or phrase found between the item rarity tag
 * @param {String} tag Rarity tag used to choose the class name with the appropriate color
 * @returns {JSX.Element} A span JSX Element containing the formatted fragment and tag-created className
 * @author Thomas Cosby
 */
const wrapFragmentInSpan = (fragment, tag) => {
  return React.createElement( // Standard DOM nodes will not work within React
    'span', // Element type
    {className: `color-item-${tag.substring(1, tag.length - 1)}`}, // Props
    fragment.substring(1, fragment.length - 1) // Children
  );
};



/**
 * @function formatRarityTagsInString
 * @description
 * Will split the supplied string by the supplied tag, creating an array.
 * WIll map through that array, testing each split string fragment if it was the marked phrase (marked with * at the start and end) .
 * If the fragment was marked, it will be wrapped in a JSX span element.
 * If the fragment wasn't marked, it will just be returned.
 * @param {String} string 
 * @param {String} tag
 * @returns {[String | JSX.Element]} Array of string fragments that didn't contain the tag, or color tagged span JSX Elements
 * @author Thomas Cosby
 */
const formatRarityTagsInString = (string, tag) => {
  let splitString = string.split(tag);

  return splitString.map(fragment => {
    if (
      fragment.length &&
      fragment.length > 0 &&
      fragment[0] === '*' &&
      fragment[fragment.length - 1] === '*'
    ) {
      return wrapFragmentInSpan(fragment, tag);
    } else {
      return fragment;
    }
  });
};


/**
 * @function formatRarityTagsInArray
 * @description
 * Iterates through all values in the supplied array, checking for unformatted strings;
 * formatting them as it goes.  If the value isn't a string, it has already been split apart
 * and formatted.
 * @param {[String | [String]]} array Array of page content containing either string or array values of page content strings
 * @param {String} tag Current tag we are formatting content for
 */
const formatRarityTagsInArray = (array, tag) => {
  // Looks through each value of the array, if it's a string and includes the supplied tag, format the string content
  let formattedArray = array.map(value => {
    if (typeof value === 'string' && value.includes(tag)) {
      return formatRarityTagsInString(value, tag);
    } else {
      return value;
    }
  });

  return flattenNestedArrays(formattedArray);
};



/**
 * @function flattenNestedArrays
 * @description
 * Creates a new storage array and iterates through an array of string and sub-array elements to construct a flattened array of formatted tag fragments.
 * While iterating, if the current iteration is an array, it will concat onto the storage array.  If the current iteration is a string,
 * it will simply be pushed ot the end of the storage array.
 * @param {[String | Array]} arrayWithNests Array containing nested sub-arrays of sentence strings and wrapped JSX span tags.
 * @returns {[String | JSX.Element]} Array of sentence fragment strings and words/phrases wrapped with color formatting JSX span tags.
 */
const flattenNestedArrays = (arrayWithNests) => {
  // Storage for final flattened array
  let finalBuiltArray = [];

  // Flattens all nested arrays into a single array of string and React Elements
  for (let i = 0; i < arrayWithNests.length; i++) {
    if (Array.isArray(arrayWithNests[i])) {
      finalBuiltArray = finalBuiltArray.concat(arrayWithNests[i]);
    } else {
      finalBuiltArray.push(arrayWithNests[i]);
    }
  }

  return finalBuiltArray;
};