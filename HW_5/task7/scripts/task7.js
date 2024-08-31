// Введення даних

let minMonth = 1
let maxMonth = 12
let minWeekDay = 0
let maxWeekDay = 6

// Обчислення

let randomMonth = minMonth + Math.floor(Math.random() * (maxMonth - minMonth + 1))

let randomWeekDay = minWeekDay + Math.floor(Math.random() * (maxWeekDay - minWeekDay + 1))

let sumRandom = randomMonth + randomWeekDay

// Виведення результату

document.write(`<div class="page__answer">
      <ul>
        <li class="page__item">Рандомний номер місяця ${randomMonth}</li>  
        <li class="page__item">Рандомний номер дня тижня ${randomWeekDay}</li>
        <li class="page__item">Сума рандомних номерів ${sumRandom}</li>
      <ul> 
    </div>
  `)