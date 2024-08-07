// Введення даних

let firstChildName = prompt('Як звуть першу дитину', 'Петрик')
let secondChildName = prompt('Як звуть другу дитину', 'Микола')
let firstChildСandiesNumber = parseInt(prompt('Введіть кількість цукерок у першої дитини', '2'))
let secondChildСandiesNumber = parseInt(prompt('ведіть кількість цукерок у другої дитини', '2'))

// Обчислення

if
  (firstChildСandiesNumber > secondChildСandiesNumber)
  document.write(`<div class="page__answer">
  ${firstChildName} має більше цукерок
  </div>`)
else if
  (secondChildСandiesNumber > firstChildСandiesNumber)
  document.write(`<div class="page__answer">
  ${secondChildName} має більше цукерок
  </div>`)
else if
  (firstChildСandiesNumber === secondChildСandiesNumber)
  document.write(`<div class="page__answer">
Діти мають однакову кількість цукерок
</div>`)


