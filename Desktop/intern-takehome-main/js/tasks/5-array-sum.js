#! npm test ./tests/5-array-sum.js

import { Balance } from "@mui/icons-material";

/**
 * Sums all integers in a nested array, no matter how many levels deep.
 * @param {Array} startOfTree An array containing other arrays, ints, strings..
 * @returns {Number} The sum of all integers contained in the input, at any level.
 */
export default function arraySum(startOfTree) {
  var sum = 0;
  for (var i = 0; i < startOfTree.length; i++) {
    if (typeof startOfTree[i] == "number") {
      sum += startOfTree[i];
    } else if (startOfTree[i] instanceof Array) {
      sum += arraySum(startOfTree[i]);
    }
  }
  return sum;
}
