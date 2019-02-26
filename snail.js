/* 
  A recursive algorithm to create a snail pattern from [0, 0]
*/

const strip = (a) => {
  // top strip
  let s = [...a.shift()];
  // right most
  for(let i = 0; i < a.length; i++) {
    s.push(a[i].pop())
  }
  // bottom
  s.push(...a.pop().reverse())
  // left most
  for(let i = a.length - 1; i >= 0; i--) {
    s.push(a[i].shift());
  }
  return s;
}

const snail = a => {
  if(a.length === 0) {
    return [];
  }
  if(a[0].length === 0) {
    return [];
  }
  if(a[0].length === 1) {
    return a[0];
  }
  let s = [];
  while(a.length !== 0) {
    if(a[0].length === 1) {
      s = [...s, ...a[0]];
      break;
    }
    s = [...s, ...strip(a)]
  }
  return s;
}

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// array = [
//   [1, 2, 3, 1],
//   [4, 5, 6, 4],
//   [7, 8, 9, 7],
//   [7, 8, 9, 7]
// ]
// array = [
//   [5, 6],
//   [8, 9]
// ]
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array);
