// Введення даних

// if (confirm('Почати тестування?')) {

let visitorsForWeek = [15, 18, 15, 29, 155, 155, 120]

// Розрахунок
// 1.
function getDayVisitorsLess20(visitorsForWeek) {
  let days = []
  let numDays = 20
  for (let i = 0; i < visitorsForWeek.length; i++) {
    if (visitorsForWeek[i] < numDays) {
      days.push(i + 1)
    }
  }
  return days
}
// 2.

function getMinVisitorsDays(visitorsForWeek) {
  let days = []
  let min = Math.min(...visitorsForWeek)
  for (let i = 0; i < visitorsForWeek.length; i++) {
    if (visitorsForWeek[i] === min)
      days.push(i + 1)
  }
  return days
}

// 3.
function getMaxVisitorsDays(visitorsForWeek) {
  let days = []
  let max = Math.max(...visitorsForWeek)
  for (let i = 0; i < visitorsForWeek.length; i++) {
    if (visitorsForWeek[i] === max)
      days.push(i + 1)
  }
  return days
}

// 4.
function getSumVisitorsForWeekDays(visitorsForWeek) {
  let sumVisitorsForWeekDays = 0
  for (let i = 0; i < visitorsForWeek.length - 2; i++) {
    sumVisitorsForWeekDays += visitorsForWeek[i]
  }
  return sumVisitorsForWeekDays
}

// 5.
function getSumVisitorsForWeekEnd(visitorsForWeek) {
  let sumVisitorsForWeekEnd = 0
  for (let i = visitorsForWeek.length - 2; i < visitorsForWeek.length; i++) {
    sumVisitorsForWeekEnd += visitorsForWeek[i]
  }
  return sumVisitorsForWeekEnd
}

document.write(`<div class="page__block"><div class="page__items">
Кількість відвідувачів магазину протягом тижня: ${visitorsForWeek}<br>
Номери днів, протягом яких кількість відвідувачів була меншою за 20: ${getDayVisitorsLess20(visitorsForWeek)}<br>
Номери днів, коли кількість відвідувачів була мінімальною: ${getMinVisitorsDays(visitorsForWeek)}<br>
Номери днів, коли кількість відвідувачів була максимальною:  ${getMaxVisitorsDays(visitorsForWeek)}<br>
Загальна кількість клієнтів у робочі дні: ${getSumVisitorsForWeekDays(visitorsForWeek)}<br>
Загальна кількість клієнтів у вихідні дні: ${getSumVisitorsForWeekEnd(visitorsForWeek)}<br>
  `)
document.write(`</div></div>`)
// }