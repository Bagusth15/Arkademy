function printWords(kalimat) {
	var filterVokal = kalimat.match(/[aiueoAIUEO]/g);
	var filterKonsonan = kalimat.match(
		/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g
	);
	return filterVokal + ',' + filterKonsonan;
}
console.log(printWords('ARKADEMY')); //AAERKDMY
