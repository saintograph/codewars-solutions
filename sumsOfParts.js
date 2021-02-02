function addLoop(arr, index) {
  let result = 0;
  for (let i = index; i < arr.length; i += 1) {
    result = result + arr[i];
  }
  return result;
}
function partsSums(ls) {
  const result = [];
  let total = addLoop(ls, 0);
  if (ls.length !== 0) {
    result.push(total);
  } else {
    return [0];
  }
  for (let i = 0; i < ls.length; i += 1) {
    total -= ls[i];
    result.push(total);
  }
  return result;
}