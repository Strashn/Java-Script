// Введення даних

let userDayNumber = parseInt(prompt('Введіть номер дня тижня (1-7)', '5'))

let nameWeekDay
// Обчислення

switch (userDayNumber) {
  case 1: nameWeekDay = `Перший день тижня - понеділок`
    break;
  case 2: nameWeekDay = `Другий день тижня - вівторок`
    break;
  case 3: nameWeekDay = `Третій день тижня - середа`
    break;
  case 4: nameWeekDay = `Четвертий день тижня - четвер`
    break;
  case 5: nameWeekDay = `П'ятий день тижня - п'ятниця`
    break;
  case 6: nameWeekDay = `Шостий день тижня - субота`
    break;
  case 7: nameWeekDay = `Сьомий день тижня - неділя`
    break;
}
document.write(`<div class="page__answer">
${nameWeekDay}</div>
  `)



