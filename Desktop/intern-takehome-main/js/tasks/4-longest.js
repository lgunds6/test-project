#! npm test ./tests/4-longest.js

import { RestaurantRounded } from "@mui/icons-material";

/**
 * Returns the longest string out of an array of strings.
 * @param {Array} strings An array that might contain strings.
 * @returns {String} The longest string from within the input array.
 */
export default function longestString(strings) {
  let longest = "";
  strings.map(function (strings) {
    if (strings.length > longest.length) {
      longest = strings;
    }
  });
  return longest;
}
