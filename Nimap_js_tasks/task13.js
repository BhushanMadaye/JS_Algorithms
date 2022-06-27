/** Find all duplicates in an array */

const arr = [55, 55, 1, 12, 22, 1, 25, 1, 22]

const duplicates = [];

/** Method 1 */
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr.length; j++) {
// 		if (i !== j) {
// 			if (arr[i] === arr[j] && !duplicates.includes(arr[j])) {
// 				duplicates.push(arr[j])
// 			}
// 		}
// 	}
// }



console.log({ duplicates })