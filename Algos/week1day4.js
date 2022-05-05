// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function merge(left, right) {
    const newArr = []
    let leftInd = 0, rightInd =  0;
    while  (leftInd < left.length || rightInd < right.length)  {
        console.log("Start of while loop newArr:", newArr)
        console.log("Start of while loop leftInd:", leftInd)
        console.log("Start of while loop rightInd:", rightInd)
        if (leftInd === left.length) {
            newArr.push(right[rightInd]);
            rightInd++;
        }
        else if (rightInd === right.length) {
            newArr.push(left[leftInd]);
            leftInd++;
        }
        else if (left[leftInd] < right[rightInd]) {
            newArr.push(left[leftInd]);
            leftInd++;
        }
        else {
            newArr.push(right[rightInd]);
            rightInd++;
        }
    }
    return newArr
}
console.log(merge(sortedA3, sortedB3));

