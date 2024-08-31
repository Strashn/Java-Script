// Введення даних
if (confirm('Почати тестування?')) {
  let menuItem = parseInt(prompt('Введіть номер пункту меню (від 1 до 3)', '2'))


  // Обчислення

  if (menuItem === 1) {
    document.write(`<div class="page__answer">
  ${`&#128512;`} 
  </div>`)
  } else if (menuItem === 2) {
    document.write(`<div class="page__answer">
  ${`&#128530;`}
  </div>`)
  } else {
    document.write(`<div class="page__answer">
  ${`&#129397;`}
  </div>`)
  }
}