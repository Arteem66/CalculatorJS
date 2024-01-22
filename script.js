const output = document.querySelector('.output')
const numberArray = document.querySelectorAll('.number')
const symbols = document.querySelectorAll('.symbol')
const clearOutput = document.getElementById('clear')
const zero = 0
let result = 0
let count = 0
let strNumber = ''
let sign

output.innerHTML = zero

numberArray.forEach(item => {
	item.addEventListener('click', () => {
		symbols.forEach(item => item.classList.remove('active'))
		output.innerHTML = ''

		strNumber += item.value
		output.innerHTML += strNumber
	})
})

symbols.forEach(item => {
	item.addEventListener('click', () => {
		symbols.forEach(item => item.classList.remove('active'))
		item.classList.add('active')

		console.log(sign)

		if (count == 0) {
			result = Number(strNumber)
			console.log(result)
			output.innerHTML = result
			strNumber = ''
			count++
		} else {
			switch (sign) {
				case 'multiplication':
					output.innerHTML = multiplication(Number(strNumber))
					strNumber = ''
				break

				case 'division':
					output.innerHTML = division(Number(strNumber))
					strNumber = ''
				break

				case 'minus':
					output.innerHTML = minus(Number(strNumber))
					strNumber = ''
				break

				case 'plus':
					output.innerHTML = plus(Number(strNumber))
					strNumber = ''
				break

				case 'equally':
					output.innerHTML = result
				break

				case 'remains':
					output.innerHTML = remains(Number(strNumber))
					strNumber = ''
				break

				// default:
				// 	console.log('ошибка');
				// 	strNumber = ''
				// break
			}
		}

		sign = item.id

		if (sign == 'opposite'){
			output.innerHTML = opposite(result)
			strNumber = ''
		}
		console.log(result)
	})
})

function plus (a){
	return result += a
}

function minus (a){
	return result -= a
}

function multiplication(a) {
	return (result *= a)
}

function division(a) {
	return (result /= a)
}

function remains(a) {
	return (result %= a)
}

function opposite(a) {
	if (a > 0){
		result = a * -1
		return result
	}else if (a < 0){
		result = a * -1
		return result
	}else{
		return a
	}
	
}


clearOutput.addEventListener('click', () => {
	sign = undefined
	strNumber = ''
	count = 0
	result = 0
	output.innerHTML = zero
	symbols.forEach(item => item.classList.remove('active'))
})

console.log(3.4 - 2);