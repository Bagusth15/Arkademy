function sortNumber(number) {
	var hideChar = number.replace(/[a-z]/g, '');
	var pecahNumber = hideChar.split('');
	var sortingNumber = pecahNumber.sort();
	if (sortingNumber.length == 0) {
		return console.log('No number found in parameter!');
	} else {
		return console.log(sortingNumber);
	}
}

sortNumber('48172a94'); //1244789
sortNumber('abc'); //No number found in parameter!
sortNumber('94a'); //49
