// Введення даних

let product1Number = parseInt(prompt('Введіть кількість одиниць першого товару', '10'))
let product1Price = parseFloat(prompt(`Введіть ціну першого товару`, `10.55`))
let product2Number = parseInt(prompt('Введіть кількість одиниць другого товару', '20'))
let product2Price = parseFloat(prompt(`Введіть ціну другого товару`, `20.55`))
let product3Number = parseInt(prompt('Введіть кількість одиниць третього товару', '30'))
let product3Price = parseFloat(prompt(`Введіть ціну третього товару`, `30.55`))

// Обчислення

let totalproduct1Price = product1Price * product1Number
let totalproduct2Price = product2Price * product2Number
let totalproduct3Price = product3Price * product3Number

let inTotal = totalproduct1Price + totalproduct2Price + totalproduct3Price

// Виведення результату

document.write(`<div class="page__answer">
    <h2 class="page__check">Чек</h2>
        <ul>
        <li class="page__item">Товар 1: ${product1Number} шт. Ціна: ${product1Price.toFixed(2)} До сплати: ${totalproduct1Price.toFixed(2)}</li>  
        <li class="page__item">Товар 2: ${product2Number} шт. Ціна: ${product2Price.toFixed(2)} До сплати: ${totalproduct2Price.toFixed(2)}</li>
        <li class="page__item">Товар 3: ${product3Number} шт. Ціна: ${product3Price.toFixed(2)} До сплати: ${totalproduct3Price.toFixed(2)}</li>
        <li class="page__total">Загалом до сплати: ${inTotal}</li>
    <ul> 
    <p>Передбачення: Сьогодні трапиться щось добре для Вас!</p> 
  </div>
  `)