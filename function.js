const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Введите a: ', a => {
  rl.question('Введите b: ', b => {
    rl.question('Введите c: ', c => {
      rl.question('Введите начальное значение x: ', xStart => {
        rl.question('Введите конечное значение x: ', xEnd => {
          rl.question('Введите шаг: ', step => {
            console.log('x\ty')
            for (let x = xStart; x <= xEnd; x += step) {
              const y = a * x ** 2 + b * x + c
              console.log(`${x}\t${y}`)
            }
            rl.close()
          })
        })
      })
    })
  })
})
