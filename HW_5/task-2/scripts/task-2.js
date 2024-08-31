// Введення даних
let sumOdd = 0
let sumEven = 0

// Обчислення

for (let i = 0; i < 100; i++) {
  let randomNum = Math.floor(Math.random() * 1000)
  document.write(`${randomNum},`)

  if (randomNum % 2 === 0)
    sumOdd++
  else
    sumEven++
}
document.write(`<div class="page__answer">
     Парних чисел: ${sumOdd}, непарних чисел: ${sumEven}<br>
  </div>`)

if (sumOdd > sumEven) {
  document.write(`<div class="page__answer">
  <br><br>Парних чисел більше
  </div>`)
} else if (sumEven > sumOdd) {
  document.write(`<div class="page__answer">
  <br><br>Непарних чисел більше
  </div>`)
} else {
  document.write(`<div class="page__answer">
  <br><br>Парних і непарних чисел однаково
  </div>`)
}