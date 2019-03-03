const binaryArrayToNumber = arr => {
  return parseInt(arr.join('').replace(/[^01]/gi, ''), 2);
};