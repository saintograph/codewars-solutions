function findShort(s) {
  s = s.split(' ');
  let count = s[0].length;
  if (s.length === 1) {
    return count;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i].length < count) {
      count = s[i].length;
    }
  }
  return count;
}

findShort("bitcoin take over the world maybe who knows perhaps"); // 3

