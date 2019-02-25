const DNAStrand = (dna) => {
	dna = dna.split('');
	for (let i = 0; i < dna.length; i++) {
		if (dna[i].match(/[AT]/g)) {
			dna[i] = dna[i] === 'A' ? 'T' : 'A';
		} else {
			dna[i] = dna[i] === 'C' ? 'G' : 'C';
		}
	}
	return dna.join('');
};

DNAStrand('TAAT'); // returns 'ATTA'
