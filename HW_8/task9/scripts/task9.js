// Введення даних

if (confirm('Почати тестування?')) {
  let userNumData = parseInt(prompt(`Введіть кількість показів температури`, `3`))

  // Обчислення
  let userNumNegativeTemp = 0
  // 

  function getNumNegativeTemp(userNumData) {
    let userNumNegativeTemp = 0
    for (let i = 0; i < userNumData; i++) {

      let userTempData = parseFloat(prompt(`Введіть показ температури`, `-15`))
      if (userTempData < 0)
        userNumNegativeTemp++
      console.log(userNumNegativeTemp)
    }
    return userNumNegativeTemp


  }
  document.write(`<div class="page__block"><div class="page__answer">      

  Введено даних: ${userNumData}<br>
  Кількість від'ємних температур: ${getNumNegativeTemp(userNumData)}

  </div></div>`)
}
