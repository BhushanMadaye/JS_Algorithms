/** Program to print Fibonacci series with recursion */

/* Formula => Fn = Fn-1 + Fn-2, if n >= 1*/

const fib = (n) => {
	if (n <= 1) {
  	return n;
  } else {
  	console.log(n-1,n-2)
  	return fib(n - 1) + fib(n- 2);
  }
}

console.log(fib(6))