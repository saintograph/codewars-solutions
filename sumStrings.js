// function sumStrings(a,b) {
//   a = a === '' ? '0' : a;
//   b = b === '' ? '0' : b;

//   return String(parseInt(a) + parseInt(b));
// }

function sumStrings(arg1, arg2) {
	var sum = "";
	var r = 0;
	var a1, a2, i;

	if (arg1.length < arg2.length) {
		a1 = arg1;
		a2 = arg2;
	} else {
 		a2 = arg1;
	}
	a1 = a1.split("").reverse();
	a2 = a2.split("").reverse();

	// Sum a1 and a2 digits
	for (i = 0; i < a2.length; i++) {
		var t = ((i < a1.length) ? parseInt(a1[i]) : 0) + parseInt(a2[i]) + r;
		
		sum += t % 10;

		r = t < 10 ? 0 : Math.floor(t / 10);
	}
	// Append the last remain
	if (r > 0)
		sum += r;

	sum = sum.split("").reverse();
	
	// Trim the leading "0"
	while (sum[0] == "0")
		sum.shift();

	return sum.length > 0 ? sum.join("") : "0";
}

sumStrings('123','456'); //579