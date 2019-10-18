function hasSubpattern(string){
  let testStr = '';
  const result = false;
  if (string.length === 1) {
    return false;
  }
  for (let i = 1; i <= string.length; i += 1) {
    testStr = string.substring(0, i);
    if (testStr === string.substring(i, testStr.length + i)) {
      if (testStr === string.substring(string.length - testStr.length, string.length)) {
        return true;
      }
    }
  }
  return false
}