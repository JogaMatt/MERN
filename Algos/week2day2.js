// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;

const squareMatrix3 = [
    [3, 4, 1],
    [5, 5, 5],
    [1, 3, 8],
];
/* 
  left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) { 
    let diagonal1 = 0;
    let diagonal2 = 0;
    for(let i = 0; i < sqrMatrix.length; i++){
        for(let j = 0; j < sqrMatrix.length; j++){
            if(i === j){
                diagonal1 += sqrMatrix[i][j];
            }
            if(i + j === sqrMatrix.length - 1){
                diagonal2 += sqrMatrix[i][j];
            }
        }
    }
    return Math.abs(diagonal1 - diagonal2)
}

console.log(diagonalDifference(squareMatrix3))