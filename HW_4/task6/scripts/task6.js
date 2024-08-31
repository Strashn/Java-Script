// Введення даних

let weekDayNumber = parseInt(prompt('Введіть номер дня тижня (1-7)', '5'))

// Обчислення

if (weekDayNumber === 1) {
    document.write(`<div class="page__answer">
    Перший день тижня - понеділок</div>
  `)
} else if (weekDayNumber === 2) {
    document.write(`<div class="page__answer">
      Другий день тижня - вівторок</div>
    `)
} else if (weekDayNumber === 3) {
    document.write(`<div class="page__answer">
        Третій день тижня - середа</div>
      `)
} else if (weekDayNumber === 4) {
    document.write(`<div class="page__answer">
      Четвертий день тижня - четвер</div>
    `)
} else if (weekDayNumber === 5) {
    document.write(`<div class="page__answer">
      П'ятий день тижня - п'ятниця</div>
    `)
} else if (weekDayNumber === 6) {
    document.write(`<div class="page__answer">
      Шостий день тижня - субота</div>
    `)
} else {
    document.write(`<div class="page__answer">
      Сьомий день тижня - неділя</div>
    `)
}

