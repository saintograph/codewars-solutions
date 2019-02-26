const anagrams = (word, words) => {
  const originalWord = word.split('').sort().join('');
  const a = [];
  for(let i = 0; i < words.length; i++) {
    const newWord = words[i].split('').sort().join('')
    if(newWord === originalWord) {
      a.push(words[i]);
    }
  }
  return a;
}