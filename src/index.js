module.exports = function zeros(expression) {

	let getCount = function (factorial, number, multiple = 1) {
		let count = 0;
		let power = 1;
		let result = 0;

		result = Math.pow(number, power) * multiple;
		while (result <= factorial) {
			power++;
			count += Math.floor(factorial / result);
			result = Math.pow(number, power) * multiple;
		}
		return count;
	}

	let factorialZeros = function(factorial){
		allTwo += getCount(factorial, 2);
		allFive += getCount(factorial, 5);
	}

	let doubleFactorialZeros = function(factorial){
		let ten = getCount(factorial, 5, 2);

		if (factorial % 2 == 0) {
			allFive += ten;
			allTwo += getCount(factorial, 2);
		} else {
			allFive += getCount(factorial, 5) - ten;
		}
	}

	let factorials = expression.split("*");
	let allTwo = 0;
	let allFive = 0;

	for (factorial of factorials) {
		let parsedFactorial = parseInt(factorial);

		if (factorial.endsWith("!!")) {
			doubleFactorialZeros(parsedFactorial);
		} else {
			factorialZeros(parsedFactorial);
		}
	}

	return Math.min(allTwo, allFive);
}