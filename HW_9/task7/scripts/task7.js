// Введення даних
if (confirm('Почати тестування?')) {

  let prices = [250, 1200, 2375, 490, 4000, 2080, 520]

  // Обчислення

  prices.forEach((el, ind, prices) => {
    if (el > 1000) prices[ind] *= 0.7
  })

  // Виведення результату

  document.write(`<div class="page__answer">
    Отриманий масив: ${prices} 
  </div>
  `)
}