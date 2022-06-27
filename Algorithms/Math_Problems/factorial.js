const factorial = (n) => {
	let currentValue = 1;
	for (let i = 1; i <= n; i++) {
		currentValue = currentValue * i
	}
	return currentValue
}

console.log(factorial(5))

// Big-O: O(n)