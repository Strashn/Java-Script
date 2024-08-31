// Введення даних

if (confirm('Почати тестування?')) {
  let userNum1 = (parseFloat(prompt(`Введіть перше довільне число`, `1`)))
  let userNum2 = (parseFloat(prompt(`Введіть друге довільне число)`, `2`)))
  let userNum3 = (parseFloat(prompt(`Введіть третє довільне число`, `3`)))
  let userNum4 = (parseFloat(prompt(`Введіть четверте довільне число`, `4`)))

  // Обчислення
  function getSum(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4
  }

  function getProduct(num1, num2, num3, num4) {
    return num1 * num2 * num3 * num4
  }

  function getAverage(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4
  }

  function getMinimum(num1, num2, num3, num4) {
    let minimum12 = Math.min(num1, num2)
    let minimum34 = Math.min(num3, num4)
    let minimum = minimum12 < minimum34 ? minimum12 : minimum34
    return minimum
  }

  document.write(`<div class = "page__block"><div class = "page__answer">`)
  document.write(`
Для чотирьох чисел: ${userNum1}, ${userNum2}, ${userNum3}, ${userNum4}<br> 
сума дорівнює: ${getSum(userNum1, userNum2, userNum3, userNum4)};<br> 
добуток дорівнює: ${getProduct(userNum1, userNum2, userNum3, userNum4)};<br> 
середнє аріфметичне дорівнює: ${getAverage(userNum1, userNum2, userNum3, userNum4)};<br> 
мінімальне значення дорівнює: ${getMinimum(userNum1, userNum2, userNum3, userNum4)}
`)

  document.write(`</div></div>`)
}