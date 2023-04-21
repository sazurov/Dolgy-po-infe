const isPrime = ( num ) => {
	if (num < 2 ) {
		return false
	}
	for( let i = 2 ; i <= Math.sqrt( num ) ; i++) {
		if (num % i === 0) {
			return false
		}
	}
	return true
}

const findPrimes = (nums) => {
  const primes = [];
  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i])) {
      primes.push(nums[i]);
    }
  }
  return primes;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = findPrimes(numbers);
console.log(primes); 