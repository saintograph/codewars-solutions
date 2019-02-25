function disemvowel(str) {
	str = str.split('');
	const isVowel = (c) => [ 'a', 'e', 'i', 'o', 'u' ].indexOf(c.toLowerCase()) !== -1;
	for (let i = 0; i < str.length; i++) {
		if (isVowel(str[i])) {
			str.splice(i, 1);
			i--; // in case vowels are side-by-side, e.g. 'you'
		}
	}
	return str.join('');
}
