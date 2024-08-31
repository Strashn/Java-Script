// Введення даних

if (confirm('Почати тестування?')) {
  let userMonthNumber = (parseFloat(prompt(`Введіть номер місяця (від 1 до 12)`, `9`)))

  // Розрахунок

  function yearSeason(monthNumber) {
    let result

    switch (monthNumber) {
      case 12:
      case 1:
      case 2: result = "Це зимовий місяць";
        break;
      case 3:
      case 4:
      case 5: result = "Це весняний місяць";
        break;
      case 6:
      case 7:
      case 8: result = "Це літній місяць";
        break;
      case 9:
      case 10:
      case 11: result = "Це осінній місяць";
        break;
    }
    return result
  }

  document.write(`<div class="page__block"><div class="page__answer">
${yearSeason(userMonthNumber)}
`)
  document.write(`</div></div>`)
}