const add = (a, b) => a + b;
const isTriangle = (a, b, c) => {
  if(add(a, b) <= c) {
    return false;
  }
  if(add(a, c) <= b) {
    return false;
  }
  if(add(b, c) <= a) {
    return false
  }
  return true;
}