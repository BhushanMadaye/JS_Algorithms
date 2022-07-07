/* Merge Sort Steps

1. Merge Sort is divided into two parts. First, dividing the array into sub arrays until all sub arrays length becomes 1. Second, Check first elements of two sub array for the lesser value and push the lesser value into a temp array. Repeat thi process, till the two subarrays becomes empty.
2. 

*/

const mergeSort = (arr) => {
	if (arr.length < 2) {
		return arr
	}
	const mid = Math.floor(arr.length / 2)
	const leftArr = arr.slice(0, mid)
	const rightArr = arr.slice(mid)
	return merge(mergeSort(leftArr), mergeSort(rightArr))
}

const merge = (leftArr, rightArr) => {
	let sortedArray = []
	while (leftArr.length && rightArr.length) {
		if (leftArr[0] <= rightArr[0]) {
			sortedArray.push(leftArr.shift())
		} else {
			sortedArray.push(rightArr.shift())
		}
	}
	return [...sortedArray, ...leftArr, ...rightArr]
}

console.log(mergeSort([-6, 20, 8, -2, 4]))