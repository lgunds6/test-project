#! npm test ./tests/2-even.js

/**
 * Returns true if the input is even
 * @param {Number} i The integer to check.
 * @returns {Boolean} Whether the input is even.
 */
export default function isNumberEven(i) {
  if (i % 2 == 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
}
console.log(isNumberEven(3));
