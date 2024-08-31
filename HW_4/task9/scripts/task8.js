// Введення даних

let monthNumber = parseInt(prompt('Введіть номер місяця (від 1 до 12)', '2'))


// Обчислення

if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
    document.write(`<div class="page__answer">
    Це зимовий місяць
    </div>
    `)
}

if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
    document.write(`<div class="page__answer">
    Це весняний місяць 
    </div>
    `)
}

if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
    document.write(`<div class="page__answer">
    Це літній місяць
    </div>
    `)
}

if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
    document.write(`<div class="page__answer">
    Це осінній місяць
    </div>
    `)
}



