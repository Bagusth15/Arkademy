function createMatrix(matrix) {
	let Penjumlahan1 = 0,
		Penjumlahan2 = 0,
		Perkalian = 0;
	for (let row = 0; row < matrix.length; row++) {
		Penjumlahan1 += matrix[row][row];
		Penjumlahan2 += matrix[row][matrix.length - row - 1];
		Perkalian = Penjumlahan1 * Penjumlahan2; //15*15
	}
	console.log(Perkalian);
}
createMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); //225
