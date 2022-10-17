const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(m) {
	let resultArray = [];
	let line = [];
	let len1 = m.length;
	if (len1 === 0) return resultArray;
	let len2 = m[0].length;
	for (let i = 0; i < len1; i++) {
		for (let j = 0; j < len2; j++) {
			if (i === 0) {
				if (j === 0) {
					line.push(m[i][j + 1] + m[i + 1][j] + m[i + 1][j + 1]);
				} else if (j === len2 - 1) {
					line.push(m[i][j - 1] + m[i + 1][j] + m[i + 1][j - 1]);
				} else {
					line.push(m[i][j + 1] + m[i + 1][j] + m[i + 1][j + 1] + m[i][j - 1] + m[i + 1][j - 1]);
				}
			} else if (i === len1 - 1) {
				if (j === 0) {
					line.push(m[i][j + 1] + m[i - 1][j] + m[i - 1][j + 1]);
				} else if (j === len2 - 1) {
					line.push(m[i][j - 1] + m[i - 1][j] + m[i - 1][j - 1]);
				} else {
					line.push(m[i][j + 1] + m[i - 1][j] + m[i - 1][j + 1] + m[i][j - 1] + m[i - 1][j - 1]);
				}
			} else {
				if (j === 0) {
					line.push(
						m[i][j + 1] +
							m[i - 1][j] +
							m[i - 1][j + 1] +
							m[i + 1][j] +
							m[i + 1][j + 1]
					);
				} else if (j === len2 - 1) {
					line.push(
						m[i][j - 1] +
							m[i - 1][j] +
							m[i - 1][j - 1] +
							m[i + 1][j] +
							m[i + 1][j - 1]
					);
				} else {
					line.push(
						m[i][j + 1] +
							m[i - 1][j + 1] +
							m[i + 1][j + 1] +
							m[i][j - 1] +
							m[i - 1][j] +
							m[i - 1][j - 1] +
							m[i + 1][j] +
							m[i + 1][j - 1]
					);
				}
			}
		}
		resultArray.push(line);
		line = [];
	}
	return resultArray;
}

module.exports = {
	minesweeper,
};
