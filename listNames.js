function list(n) {
	const names = [];
	switch (n.length) {
		case 0:
			return '';
		case 1:
			return n[0].name;
		case 2:
			return `${n[0].name} & ${n[1].name}`;
	}
	for (let i = 0; i < n.length - 1; i++) {
		names.push(n[i].name);
	}
	return `${names.join(', ')} & ${n[n.length - 1].name}`;
}

list([ { name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' } ]);

// logs Bart, Lisa, Maggie, Homer & Marge.