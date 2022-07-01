const bubbleSort = (arr) => {
	let areElementsSwapped;
	do {
		areElementsSwapped = false
		for (let i = 0; i < arr.length - 1; i++) {
			const currentElement = arr[i]
			const nextElement = arr[i + 1]
			if (currentElement > nextElement) {
				arr[i] = nextElement
				arr[i + 1] = currentElement
				areElementsSwapped = true
			}
		}
	} while (areElementsSwapped === true)

	return arr
}

console.log(bubbleSort([-6, 10, 50, -8, 3]))


// Big-O : O(n^2) :: As it has a nested loop