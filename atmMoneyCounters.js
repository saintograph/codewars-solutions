const VALUES = {
	RUB: [ 10, 50, 100, 500, 1000, 5000 ],
	EUR: [ 5, 10, 20, 50, 100, 200, 500 ],
	UAH: [ 1, 2, 5, 10, 50, 100, 500 ],
	USD: [ 1, 2, 5, 10, 20, 50, 100 ],
	CUP: [ 1, 3, 5, 10, 20, 50, 100 ],
	SOS: [ 1000 ]
};

const atm = (value) => {
	const result = [];
	let str = '';
	let amt = value.match(/\d+/g);
	let cur = value.match(/[a-zA-Z]+/g).join('').toUpperCase();
	let i = VALUES[cur].length - 1;
	if (!VALUES[cur]) {
		return `Sorry, have no ${cur}.`;
	}
	if (amt % VALUES[cur][0] !== 0) {
		return `Can't do ${amt} ${cur}. Value must be divisible by ${VALUES[cur][0]}!`;
	}
	while (i >= 0) {
		const factor = Math.floor(amt / VALUES[cur][i]);
		amt = amt % VALUES[cur][i];
		result.push([ factor, VALUES[cur][i] ]);
		i--;
	}
	result.forEach((x) => {
		if (x[0] !== 0) {
			str = str.concat(`, ${x[0]} * ${x[1]} ${cur}`);
		}
	});
	return str.substr(1).trim();
};

// atm('842 usd')
atm('EUR YTHMICS 40010');
