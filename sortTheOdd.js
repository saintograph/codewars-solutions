function quickSort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		const left = [];
		const right = [];
		const newArray = [];
		const pivot = origArray.pop();
		const length = origArray.length;

		for (let i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
}

const sortArray = a => {
  if(a.length === 0) {
    return [];
  }
  let s = quickSort([...a]);
  s = s.filter(x => x % 2 === 1 && x !== 0);
  for(let i = 0; i < a.length; i++) {
    if(a[i] !== 0 && a[i] % 2 === 1) {
      a[i] = s.shift();
    }
  }
  return a;
}
