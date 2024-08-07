// Введення даних

let productPrice = parseFloat(prompt('Введіть ціну товару', '80'))
let userMoney = parseFloat(prompt('Введіть кількість грошей', '100'))

// Розрахунок

if (productPrice > userMoney) {
  document.write(`<div class="page__answer">
  Недостатньо коштів для покупки.
  </div>
`)
} else if (productPrice <= userMoney && userMoney - productPrice >= 4) {
  document.write(`<div class="page__answer">
  Дякую за покупку. Пропоную придбати лотерею за 4 грн
  </div>
`)
}
else {
  document.write(`<div class="page__answer">
  Сплачено. Тримайте товар.
</div>
`)
}





