#! npm test ./tests/3-file-extension.js

/**
 * Returns the file extension of a filename.
 * @param {String} filename The string from which to extract the file extension
 * @returns {String} The file extension (with no period), or false if there is none.
 */
export default function getFileExtension(filename) {
  if (filename.includes(".")) {
    return filename.split(".").pop();
  } else {
    return false;
  }
}
getFileExtension("luke.png");
