// Введення даних
if (confirm('Почати тестування?')) {
  let userNumData = parseInt(prompt(`Введіть кількість показів температури`, `4`))

  // Обчислення

  function getAverageSumPositiveTemp(userNumData) {

    let sumPositiveTemp = 0
    let numPositiveData = 0

    for (let i = 0; i < userNumData; i++) {
      let userTempData = parseFloat(prompt(`Введіть показ температури`, `10`))
      if (userTempData > 0) {
        sumPositiveTemp += userTempData
        numPositiveData++
        console.log(numPositiveData)
      }
    }
    let averagePositiveTemp = sumPositiveTemp / numPositiveData

    document.write(`<div class="page__block"><div class="page__answer">      
    Всього введено даних: ${userNumData}<br>
    Введено доданих даних: ${numPositiveData}<br>
    Середня температура: ${averagePositiveTemp.toFixed(1)}
    </div></div>`)

    return averagePositiveTemp
  }

  getAverageSumPositiveTemp(userNumData)
}