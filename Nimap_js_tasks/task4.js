/** Find reverse of a string */

let str = 'bhushan';

const splittedStr = str.split('');
let reversedArr = [];
for(let i = splittedStr.length - 1; i >= 0; i--) {
	reversedArr.push(splittedStr[i]);
}
reversedStr = reversedArr.join('');

console.log({ reversedStr })