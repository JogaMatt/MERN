// const arr1 = [1, 10, 5, 65, 4];
// const arr2 = [3, 5];
// const arr3 = [9];


// function maxMinAvg(arr){
//     var newArr = [];
//     var max = Math.max(...arr);
//     var min = Math.min(...arr);
//     var sum = 0;
//     var avg = 0;

//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i];
//         avg = sum / arr.length;
//     }

//     newArr.push(max);
//     newArr.push(min);
//     newArr.push(avg);

//     return newArr;
// }

// console.log(maxMinAvg(arr1));
// console.log(maxMinAvg(arr2));
// console.log(maxMinAvg(arr3));

// function smallestValue(){
// 	var array = [-13, -15, -8, -29, -34, -3, 4, 9, 10, -3, 7];
// 	var smallest = Math.min(...array);
// 	//your code here
	
// 	return smallest; 
// }

// console.log(smallestValue());

//2- Write a function that given a list of countries, returns the country(s) that occur the least/min times

// const arr = ["Argentina", "Cuba", "Chile", "Argentina"];
// const expectedReturn = ["Cuba", "Chile"];

// const arr2 = ["Lindenwold", "Cherry Hill", "Cherry Hill", "Pine Hill", "Blackwood"];
// const expectedReturn2 = ["Lindenwold", "Pine Hill", "Blackwood"];

// function funcName(array){
//     var newArr = [];
// 	newArr.push(array[0])
//     // ITERATE THROUGH ARRAY
//     for(var i = 1; i <array.length; i++){
// 		newArr.push(array[i]);
// 		for(var j = 1; j < array.length; j++){
// 			if(array[j] == newArr[0]){
// 			newArr.pop();
// 			newArr.shift();
//         	}
// 		}
//     }
// 	console.log(newArr);
// }

// funcName(arr2);

// const unique = Array.from(new Set(arr2));

// console.log(unique);

// var stringR = "lo W";
// var stringS = "Hello World!";


// function concat(string1, string2, index){
//     var newString = "";
//     for(var i = 0; i < string1.length; i++){
//         if(i <= index){
//             newString += newString.concat(string1[i]);
//         } else if (i = index+1){
//             newString = newString.concat(string2);
//         } else {
//             newString = newString.concat(string1[i]);
//         }
//     }
//     console.log(newString)
// }

// console.log(concat(stringS, stringR, 4));
// const arr1 = [4,7,1,9,3,6]

// function funcName(arr, x){
//     let first = 0;
//     let second = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > x){
//             i++;
//         }
//         for(let j = 1; j<arr.length-1; j++){
//             if(arr[i] + arr[j] == x){
//                 first = arr[i];
//                 second = arr[j]
//             }
//         }
//     }
//     console.log(`PAIR: (${first}, ${second})`)
// }

// funcName(arr1, 10)

const arr1 = [10, 4, 4, 6, 3]
const expected = 4

function dups(arr){
    let dup;
    for(let i = 0; i<arr.length; i++){
        let start = arr[i]
        for(let j = 1; j<arr.length-1; j++){
            if(arr[j] == start){
                dup = arr[j]
            }
        }
        
    }
    return dup
}

console.log(dups(arr1))