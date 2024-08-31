// Введення даних

if (confirm('Почати тестування?')) {
  let userDayNumber = (parseInt(prompt(`Введіть номер дня (від 1 до 7)`, `5`)))



  // Розрахунок

  function weekDay(dayNumber) {
    let result

    switch (dayNumber) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5: result = "Це робочий день";
        break;
      case 6:
      case 7: result = "Це вихідний";
        break;
    }
    return result
  }

  document.write(`<div class="page__block"><div class="page__answer">
${weekDay(userDayNumber)}
`)
  document.write(`</div></div>`)
}