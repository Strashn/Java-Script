// Введення даних

let lengthCm = parseFloat(prompt('Введіть довжину у сантиметрах', '154'))

// Обчислення

let lengthM = lengthCm / 100
let lengthKm = lengthM / 1000

// Виведення результату

document.write(`<div class="page__answer">
<ul>
  <li class="page__item">Довжина у сантиметрах: ${lengthCm.toFixed(2)}</li>  
  <li class="page__item">Довжина у метрах: ${lengthM.toFixed(2)}</li>
  <li class="page__item">Довжина у кілометрах ${lengthKm.toFixed(6)}</li>
  <ul>  
  </div>
  `)