// Введення даних

if (confirm('Почати тестування?')) {
    let userDeposit = parseFloat(prompt(`Введіть суму депозиту`, `10000 тис. грн`))

    // Обчислення

    for (let year = 0; year < 20; year++) {
        userDeposit += userDeposit * 0.2 * 0.95
    }

    // Виведення результату

    document.write(`<div class="page__answer">
    Сума вкладу через 20 років - ${userDeposit.toFixed(2)} тис. грн
  </div>
  `)
}