// Введення даних

let userMonthNumber = parseInt(prompt('Введіть номер місяця (від 1 до 12)', '2'))

let season
// Обчислення

switch (userMonthNumber) {
    case 12:
    case 1:
    case 2: season = `Це зимовий місяць`
        break;
    case 3:
    case 4:
    case 5: season = `Це весняний місяць`
        break;
    case 6:
    case 7:
    case 8: season = `Це літній місяць`
        break;
    case 9:
    case 10:
    case 11: season = `Це осінній місяць`
}
document.write(`<div class="page__answer">
  ${season}</div>
    `)





