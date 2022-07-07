/* Quick Sort Steps

1. Pick a pivot point in the array. 
		 Note: Pivot could be first element, last element, random element in array, median of array.
2. Divide the array in two parts rom pivot point. Values less than pivot should be moved in left array and those greater than pivot should be moved in the rightt array.
3. Repeat the process with recursion till the array length is 1.
4. Concatenate the sub-arrays omitting the blank values.

*/

const quickSort = (arr) => {
	if (arr.length < 2) {
		return arr
	}
	const pivot = arr[arr.length - 1]
	let leftArr = []
	let rightArr = []
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			leftArr.push(arr[i])
		} else {
			rightArr.push(arr[i])
		}
	}
	console.log(leftArr, rightArr)

	return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}



console.log(quickSort([-6, 20, 8, -2, 4]))
