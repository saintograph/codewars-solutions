// Kadane's Algorithm
const maxSequence = arr => {
  const test = arr.filter(x => x > 0);
  if(!arr.length || !test.length) {
    return 0;
  };
  let max_ending = max_so_far = 0;
  for(let a in arr) {
    max_ending = Math.max(arr[a], max_ending + arr[a]);
    max_so_far = Math.max(max_so_far, max_ending);
  };
  return max_so_far;
};

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6