/** Program to find if a string is Palindrome */

let str = 'bhushan';

const splittedStr = str.split('');
let reversedArr = [];
for(let i = splittedStr.length - 1; i >= 0; i--) {
	reversedArr.push(splittedStr[i]);
}
reversedStr = reversedArr.join('');

if (str === reversedStr) {
    console.log(`Given string is a Palindrome`);
} else {
    console.log(`Given string is not a Palindrome`);
}