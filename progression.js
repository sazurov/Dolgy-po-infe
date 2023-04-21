const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

	rl.question('Введите тип прогрессии (арифметическая/геометрическая): ', (progressionType) => {
	rl.question('Введите первый член прогрессии: ', (firstTerm) => {
	rl.question('Введите разность прогрессии или знаменатель: ', (differenceOrRatio) => {
	rl.question('Введите номер последнего члена: ', (lastTermIndex) => {
    let sum = 0;

    if (progressionType === 'арифметическая') {
         for (let i = 0; i < lastTermIndex; i++) {
             sum += firstTerm + i * differenceOrRatio
            }
          } else if (progressionType === 'геометрическая') {
              for (let i = 0; i < lastTermIndex; i++) {
                sum += firstTerm * Math.pow(differenceOrRatio, i)
              }

          console.log(`Сумма прогрессии: ${sum}`)

          rl.close()
					}
        })
      })
    })
  })
