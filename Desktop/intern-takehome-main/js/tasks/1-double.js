#! npm test ./tests/1-double.js

/**
 * Doubles an integer. Not a trick question.
 * @param {Number} i The integer to double.
 * @returns {Number} The input doubled
 */

export default function doubleInteger(i) {
  i = i * 2;
  return i;
}
doubleInteger(6);
