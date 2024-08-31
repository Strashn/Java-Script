// Введення даних

if (confirm('Почати тестування?')) {
  let userNum1 = (parseFloat(prompt(`Введіть перше довільне число`, `1`)))
  let userNum2 = (parseFloat(prompt(`Введіть друге довільне число)`, `-2`)))
  let userNum3 = (parseFloat(prompt(`Введіть третє довільне число`, `300`)))

  const userNum = [userNum1, userNum2, userNum3]

  let evenNum = 0
  let positiveNum = 0
  let moreHundredNum = 0

  // Обчислення

  function getEvenNum() {
    for (let i = 0; i < 3; i++)
      if (userNum[i] % 2 === 0)
        evenNum++
  }
  getEvenNum(userNum)

  function getPositiveNum() {
    for (let i = 0; i < 3; i++)
      if (userNum[i] > 0)
        positiveNum++
  }
  getPositiveNum(userNum)

  function getMoreHundredNum() {
    for (let i = 0; i < 3; i++)
      if (userNum[i] > 100)
        moreHundredNum++
  }
  getMoreHundredNum(userNum)

  // Виведення результату

  document.write(`<div class="page__block"><div class="page__answer">
Для заданих чисел: ${userNum1}, ${userNum2}, ${userNum3}:<br>
Кількість парних чисел: ${evenNum}<br>
Кількість доданих чисел:${positiveNum}<br>
Кількість чисел більших за 100: ${moreHundredNum}
</div></div>
  `)
}