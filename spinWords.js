const spinWords = (w) => {
  if(w === '' || w === ' ') {
    return '';
  }
  w = w.split(' ');
  if(w.length === 1) {
    return w[0].length > 4 ? w[0].split('').reverse().join('') : w.join('');
  }
  for(let i = 0; i < w.length; i++) {
    if(w[i].length > 4) {
      w[i] = w[i].split('').reverse().join('');
    }
  }
  return w.join(' ');
}
