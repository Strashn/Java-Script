// Введення даних

let arr = [4, -2, -5, 3, -3, 5, 2, -4, 5]

let positiveNumberProduct = arr.reduce(
  (positiveNumberProduct, element) =>
    element > 0 ? positiveNumberProduct * element :
      positiveNumberProduct, 1)

// Виведення результату

document.write(`<div class="page__block"><div class="page__answer">
Заданий масив: ${arr}<br><br>
Отриманий додаток: ${positiveNumberProduct}
</div></div>
  `)