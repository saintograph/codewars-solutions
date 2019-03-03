const longestConsec = (s, k) => {
  let a = '';
  if(k < 1 || s.length === 0 || k > s.length) {
    return '';
  };
  for(let i = 0; i < s.length; i++) {
    a = a.length >= s.slice(i, i + k).join('').length ? a : s.slice(i, i + k).join('');
    if(i === s.length - k) {
      break;
    }
  }
  return a;
}



longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) 
// "ixoyx3452zzzzzzzzzzzz"