/*
Get 1 to 255
Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function for this exercise.
*/
// function get_array(){
//     let arr = []
//     for(let i = 1; i <= 255; i++){
//         arr.push(i);
//     }
//     return arr
// }
// console.log(get_array())

/*
Get even 1000
Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.
*/
// function funcName(){
//     let sum = 0;
//     for(let i = 1; i <= 1000; i++){
//         if(i % 2 == 0){
//             sum += i
//         }
//     }
//     return sum
// }
// console.log(funcName())

/*
Sum odd 5000
Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)
*/
// function sum_odd_5000(){
//     let sum = 0;
//     for(let i = 1; i <= 5000; i++){
//         if(i % 2 == 1){
//             sum += i
//         }
//     }
//     return sum
// }
// console.log(sum_odd_5000())

/*
Iterate an array
Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)
*/

const arr1 = [1, 2, 3, 4, 5]
const expected = 15

const arr2 = [1, 12, 123]
const expected2 = 136

// function iterArr(arr){
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(iterArr(arr2))

/*
Find max
Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
*/
// function findMax(arr){
//     let max = Math.max(...arr)
//     return max
// }

// ~~~~~FOR LOOP~~~~~
// function findMaxLoop(arr){
//     let max = 0
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }
// // console.log(findMax(arr1))
// // console.log(findMax(arr2))
// console.log(findMaxLoop(arr2))

/*
Find average
Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
*/
// function findAvg(arr){
//     let avg = 0
//     let sum = 0
//     for(let i = 0; i<arr.length; i++){
//         sum += arr[i]
//         avg = sum / arr.length
//     }
//     return avg
// }
// console.log(findAvg(arr1))

/*
Array odd
Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
*/
// function oddNumbers(){
//     let arr = []
//     for(let i = 1; i <= 50; i++){
//         if(i%2 == 1){
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(oddNumbers())

/*
Greater than Y
Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
*/
// function greaterY(arr, Y){
//     let count = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > Y){
//             count++
//         }
//     }
//     return count
// }
// console.log(greaterY(arr1, 2))

/*
Squares
Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
*/
//forEach
// function squareVal(arr){
//     let newArr = []
//     for(let i = 0; i<arr.length; i++){
//         newArr.push(arr[i] * arr[i])
//     }
//     return newArr
// }
// console.log(squareVal(arr1))

/*
Negatives
Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
*/
const arr3 = [1, -2, 3, -4, 5]
const expected3 = [1, 0, 3, 0, 5]
// function noNeg(arr){
//     let newArr = []
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] < 0){
//             arr[i] = 0;
//             newArr.push(arr[i]);
//         } else {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr
// }
// console.log(noNeg(arr3))

/*
Max/Min/Avg
Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
*/
// function maxMinAvg(arr){
//     let newArr = []
//     let min = Math.min(...arr)
//     let max = Math.max(...arr)
//     let sum = 0;
//     let avg = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     avg = sum / arr.length
//     newArr.push(max)
//     newArr.push(min)
//     newArr.push(avg)
//     return newArr
// }
// console.log(maxMinAvg(arr3))

/*
Swap values
Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
*/
// function swap(arr) {
//     let start = arr[0]
//     let end = arr[arr.length-1]
//     arr[0] = end
//     arr[arr.length-1] = start
//     return arr
// }
// console.log(arr3)
// console.log(swap(arr3))

// function numToString(arr){
//     let newArr = []
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] < 0){
//             newArr.push("Dojo")
//         } else {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(numToString(arr3))