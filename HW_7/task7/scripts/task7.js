// Введення даних

let userDeposit = 1

// Обчислення

for (let year = 0; year < 20; year++) {
  userDeposit += userDeposit * 0.2
}

for (let year = 0; year < 17; year++) {
  userDeposit += userDeposit * 0.27
}

// Виведення результату

document.write(`<div class="page__answer">
    Сума вкладу через 37 років - ${userDeposit.toFixed(2)} * S тис. грн
  </div>
  `)