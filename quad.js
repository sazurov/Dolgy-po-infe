
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Введите коэффициент a: ', a => {
  rl.question('Введите коэффициент b: ', b => {
    rl.question('Введите коэффициент c: ', c => {
			
      const D = b * b - 4 * a * c

      if (D < 0) {
        console.log("Корней нет")
      }
			 else if ( D === 0 ) {
        const x = -b / (2 * a)
        console.log(`Уравнение имеет один корень: x = ${x}`)
      } 
			else {
        const x1 = (-b + Math.sqrt(D)) / (2 * a)
        const x2 = (-b - Math.sqrt(D)) / (2 * a)
        console.log(`Уравнение имеет два корня: x1 = ${x1}, x2 = ${x2}`)
      }

      rl.close()
    })
  })
})
