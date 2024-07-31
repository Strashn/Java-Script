// Введення даних

let userYearOfBorn = parseInt(prompt('Введіть рік народження', '2000'))
const currentYear = 2024

// Обчислення

let userAge = currentYear - userYearOfBorn

// Виведення результату

document.write(`<div class="page__answer">
  Для року народження ${userYearOfBorn} вік ${userAge}</div>
    `)