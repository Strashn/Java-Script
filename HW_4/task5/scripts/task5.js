// Введення даних

let driverСategory = prompt('Введіть категорію водія (A, B або C)', 'A').toUpperCase()

// Обчислення

if (driverСategory === `A`) {
  document.write(`<div class="page__answer">
  Ви можете керувати мотоциклом
  </div>
  `)
}
else if (driverСategory === `B`) {
  document.write(`<div class="page__answer">
  Ви можете керувати легковим автомобилем
  </div>
  `)
}
else if (driverСategory === `C`) {
  document.write(`<div class="page__answer">
  Ви можете керувати вантажним автомобілем
  </div>
  `)
}
else {
  document.write(`<div class="page__answer">
  Введіть потрібне значення
  </div>
  `)
}