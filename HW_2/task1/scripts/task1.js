// Введення даних

let a = parseFloat(prompt('Введіть а', '2'))
let b = parseFloat(prompt('Введіть b', '2'))

// Розрахунок

const sum = a + b
const product = a * b
const quotinent = a / b


// Виведення результату

document.write(`<div class="page__answer">
<div class="page__text">Для даних a=${a}, b=${b}</div>
    <table class="table" cellspacing="0">
      <tr>
        <td>Результат</td>
        <td>Сума</td>
        <td>Добуток</td>
        <td>Частка</td>
      </tr>
        <tr>
        <td>Значення</td>
        <td>${sum.toFixed(2)}</td>
        <td>${product.toFixed(2)}</td>
        <td>${quotinent.toFixed(2)}</td>
      </tr>
    </table>
    </div>
`)