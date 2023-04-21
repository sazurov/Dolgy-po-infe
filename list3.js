const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fillArray = () => {
  return new Promise(resolve => {
    rl.question('Введите элементы массива через пробел: ', (input) => {
      const arr = input.split(' ').map(Number)
      resolve(arr)
    })
  })
}

const findMax = (arr) => {
  return Math.max(...arr)
}

const findMin = (arr) => {
  return Math.min(...arr)
}

const findAvg = (arr) => {
  const sum = arr.reduce((acc, curr) => acc + curr, 0)
  return sum / arr.length
}

const linearSearch = (arr, value) =>{
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    }
  }
  return -1
}

const countElements = (arr) => {
  return arr.length
}

const sumElements = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0)
}

const multiplyElements = (arr) => {
  return arr.reduce((acc, curr) => acc * curr, 1)
}

const main = async () =>{
	
  const arr = await fillArray()

  console.log('Массив:', arr)

  const max = findMax(arr)
  console.log('Максимальное значение в массиве:', max)

  const min = findMin(arr)
  console.log('Минимальное значение в массиве:', min)

  const avg = findAvg(arr)
  console.log('Среднее значение в массиве:', avg)

  const searchValue = 5
  const index = linearSearch(arr, searchValue)
  console.log(`Индекс элемента ${searchValue} в массиве: ${index}`)

  const count = countElements(arr)
  console.log('Количество элементов в массиве:', count)

  const sum = sumElements(arr)
  console.log('Сумма значений в массиве:', sum)

  const multiply = multiplyElements(arr)
  console.log('Произведение значений в массиве:', multiply)

  rl.close()
}

main()
