// Введення даних

if (confirm('Почати тестування?')) {

  let userNumber = parseInt(prompt(`Введіть кількість елементів`, `9`))
  let value1 = 1
  let value2 = 7
  let num = 5
  let arr = []

  // Розрахунок

  if (userNumber < num) {
    arr = new Array(userNumber).fill(value1)
  } else {
    arr = new Array(userNumber).fill(value1, 0, num).fill(value2, num)
  }

  //Виведення результату

  document.write(`<div class="page__block"><div class="page__answer">
  Створений масив: ${arr}
  </div></div>`)
}