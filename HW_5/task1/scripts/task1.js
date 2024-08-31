// Введення даних

if (confirm('Почати тестування?')) {
  let userQuantityNum = parseFloat(prompt('Введіть кількість випадкових чисел', '5'))
  let randomNum

  // Розрахунок
  document.write(`<ul class="page__list">`)
  for (let i = 0; i < userQuantityNum; i++) {
    randomNum = 1 + Math.floor(Math.random() * 100)
    document.write(`<li class="item">${randomNum}</li>`)
  }
  document.write(`</ul>`)
}