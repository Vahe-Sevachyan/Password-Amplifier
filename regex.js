// empty string or string with white space
function hasWhiteSpace(value) {
  return /^$|\s+/.test(value);
}
//empty string or white space
function hasWhiteSpace(value) {
  return /^\s*$/.test(value);
}
