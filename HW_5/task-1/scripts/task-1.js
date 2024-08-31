// Введення даних



// Розрахунок

for (let monthNum = 3; monthNum <= 8; monthNum++) {
  if (monthNum >= 3 && monthNum < 6) {
    document.write(`<div class="page__answer">
    Сезон - весна, місяц №${monthNum}<br>
    `)
  }
  else {
    document.write(`<div class="page__answer">
    Сезон - літо, місяц №${monthNum}<br>
    `)
  }
}