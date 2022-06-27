/** Program to print Fibonacci series without recursion */

const fib = (n) => {
	// create a new array with n + 2 elements, with 0 & 1 being the first two elements
	const arr = new Array(n + 2);
	arr[0] = 0;
	arr[1] = 1;
	for (let i = 2; i < arr.length; i++) {
		arr[i] = arr[i - 1] + arr[i - 2]
	}
	return arr[n]
	console.log(arr)
}

console.log(fib(8))