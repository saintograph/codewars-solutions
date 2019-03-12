const sum_pairs = (A, val) => {
  let found_values = new Set();
  for (let a in A) {
    if (found_values.has(val - A[a])) {
      return [val - A[a], A[a]];
    }

    found_values.add(A[a]);
  }
}