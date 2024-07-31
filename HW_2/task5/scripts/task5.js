// Введення даних

let secondsFromBeginnig = parseInt(prompt('Введіть кількість секунд з початку доби', '58240'))

// Обчислення

let hours = Math.floor(secondsFromBeginnig / 3600)
let minutes = Math.floor(secondsFromBeginnig / 60)

// Виведення результату

document.write(`<div class="page__answer">
    <ul>
        <li class="page__item">Годин: ${hours}</li>  
        <li class="page__item">Хвилин: ${minutes}</li>
    <ul>  
  </div>
  `)