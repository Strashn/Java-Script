// Введення даних

let userNumRow = parseInt(prompt(`Введіть кількість рядків таблиці`, `4`))
let userNumCol = parseInt(prompt(`Введіть кількість стовпців таблиці`, `3`))
let userMessage = prompt(`Введіть текст комірки`, `Тест`)

// Обчислення

function getTable(userNumRow, userNumCol) {

    document.write(`<table border="1px" cellspacing="0">`)

    for (let i = 0; i < userNumRow; i++) {
        document.write(`<tr>`)

        for (let j = 0; j < userNumCol; j++) {
            document.write(`<td>${userMessage}</td>`)
        }
        document.write(`</tr>`)
    }
    document.write(`</table>`)
}

document.write(`${getTable(userNumRow, userNumCol)}`)