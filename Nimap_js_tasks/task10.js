/** Program to find even numbers in an array */

const arr = [565,2,654,36,1,648,5,985,23,58,24];

let evenNumbersArr = [];

for(i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenNumbersArr.push(arr[i])
  }
}

console.log({ evenNumbersArr })