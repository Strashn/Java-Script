// Введення даних

let goodsCost = parseFloat(prompt('Введіть ціну товару', '25.20'))
let goodsQuantity = parseInt(prompt(`Введіть кількість товару`, '10'))
const vat = 0.05

// Обчислення

let totalCost = goodsCost * goodsQuantity
let VAT = totalCost * vat

// Виведення результату

document.write(`<div class="page__answer">
  Загальная вартість товару: ${totalCost.toFixed(2)} грн,  
  ПДВ: ${VAT.toFixed(2)} грн
  </div>
  `)
