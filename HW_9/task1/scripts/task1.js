// Введення даних

if (confirm('Почати тестування?')) {

  let userNumber = (parseInt(prompt(`Введіть кількість елементів`, `5`)))
  let value = 0

  // Розрахунок

  let arr = new Array(userNumber).fill(value)

  document.write(`<div class="page__block"><div class="page__answer">
 Масив з заданою кількістю елементів: ${arr}
`)
  document.write(`</div></div>`)
}