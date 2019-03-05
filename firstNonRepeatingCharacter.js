function firstNonRepeatingLetter(s) {
  let result = '';
  while (s) {
    let len = s.length;
    let char = s[0];
    let regex = new RegExp(char, "gi");
    s = s.replace(regex, "");
    if (s.length == len - 1) {
      result = char;
      break;
    }
  }
  return result;
}

firstNonRepeatingLetter('moonmen')