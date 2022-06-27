const arr = [55, 454, 4, 54, 5, 5555, 5]

/* Code to find the second largest number */

for (let i = 0; i < arr.length; i++) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < arr[i + 1]) {
			const firstElement = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = firstElement;
		}
	}
}

console.log(arr[1])