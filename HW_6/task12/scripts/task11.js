// Введення даних



// Обчислення

document.write(`<div class="page__block"><div class="page__answer">      
  `)

for (let figure1 = 1; figure1 <= 9; figure1++) {
  for (let figure2 = 0; figure2 <= figure1; figure2++)
    document.write(`
  ${figure1}${figure2},
  `)
}

document.write(`
    </div></div>
  `)
