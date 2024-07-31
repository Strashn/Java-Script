// Введення даних

let a = parseInt(prompt('Введіть а', '2'))
let b = parseInt(prompt('Введіть b', '2'))
let c = parseInt(prompt('Введіть c', '2'))

// Обчислення

const S1 = a + 12 + b
const S2 = Math.sqrt((a + b) / (2 * a))
const S3 = Math.cbrt((a + b) * c)
const S4 = Math.sin(a / -b)

// Виведення результату

document.write(`<div class="page__answer">
<div class="page__text">Для даних a=${a}, b=${b}, c=${c} результат:</div>
    <ul>
    <li>S1=${S1}</li>
    <li>S2=${S2}</li>
    <li>S3=${S3}</li>
    <li>S4=${S4.toFixed(2)}</li>
  </ul>
  </div>
  `)