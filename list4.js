const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fillArray = (length, min, max) => {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1) + min))
  }
  return arr
}

const findMax = (arr) => {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

const findMin = (arr) => {
  let min = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}

const findAvg = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

const linearSearch = (arr, value) => {
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
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

const multiplyElements = (arr) => {
  let multiply = 1
  for (let i = 0; i < arr.length; i++) {
    multiply *= arr[i]
  }
  return multiply
}

const main = async () => {
  const length = 5
  const min = 1
  const max = 10
  const arr = fillArray(length, min, max)

  console.log('Массив:', arr)

  const maxVal = findMax(arr)
  console.log('Максимальное значение в массиве:', maxVal)

  const minVal = findMin(arr)
  console.log('Минимальное значение в массиве:', minVal)

  const avg = findAvg(arr)
  console.log('Среднее значение в массиве:', avg)

  const searchValue = 10
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