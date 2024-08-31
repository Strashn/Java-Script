// Введення даних
if (confirm('Почати тестування?')) {
  let userMonthNumber = (parseFloat(prompt(`Введіть номер місяця (від 1 до 12)`, `9`)))

  // Розрахунок

  function monthName(monthNumber) {
    let result

    switch (monthNumber) {
      case 1: result = "Це січень";
        break;
      case 2: result = "Це лютий";
        break;
      case 3: result = "Це березень";
        break;
      case 4: result = "Це квітень";
        break;
      case 5: result = "Це травень";
        break;
      case 6: result = "Це червень";
        break;
      case 7: result = "Це липень";
        break;
      case 8: result = "Це серпень";
        break;
      case 9: result = "Це вересень";
        break;
      case 10: result = "Це жовтень";
        break;
      case 11: result = "Це листопад";
        break;
      case 12: result = "Це грудень";
        break;
    }
    return result
  }

  document.write(`<div class="page__block"><div class="page__answer">
${monthName(userMonthNumber)}
`)
  document.write(`</div></div>`)
}