// naive
const dblLinear = n => {
  let seq = [1];
  let i = 1;
  let j = 1;
  while(i <= n) {
    const y = 2 * j + 1;
    const z = 3 * j + 1;
    seq.push(...[z, y]);
    seq = Array.from(new Set(seq)).sort((a, b) => a - b)
    j = seq[i];
    i++;
  }
  return seq[n];
}

dblLinear(10) // 22 // 20 = 57