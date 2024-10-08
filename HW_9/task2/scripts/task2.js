// Введення даних

if (confirm('Почати тестування?')) {

  let usersNumber = parseInt(prompt(`Введіть кількість елементів`, `7`))
  let value1 = 1
  let value2 = 7

  // Розрахунок
  let firstInterval = Math.floor(usersNumber / 2)

  let arr = new Array(usersNumber).fill(value1, 0, firstInterval).fill(value2, firstInterval)

  // Виведення результату

  document.write(`<div class="page__block"><div class="page__items">
  Створений масив: ${arr}
  </div></div>`)
}