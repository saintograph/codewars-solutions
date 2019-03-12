const moveZeros = (a) => {
  let count = 0;
  for(let i = 0; i < a.length; i++) {
    if(a[i] === 0) {
      a.splice(i, 1);
      i--
      count += 1;
    }
  }
  const zeros = '0'.repeat(count).split('').map(x => x = parseInt(x))
  return [...a, ...zeros];
};