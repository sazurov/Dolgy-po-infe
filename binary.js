const binary = (arr , k) => {
	let left = 0

	let right = arr.length - 1

	while( left < right) {
		let middle = Math.floor((left + right) / 2)

		if (arr[middle] === k) {
			return true
		}
		else if (arr[middle] < k) {
			left = middle + 1 
		}
		else {
			right = middle -1 
		}
	}
	return false
}

const exampleArray = [ 2, 4 , 6 , 8 , 10 ]

console.log(binary(exampleArray , 3))