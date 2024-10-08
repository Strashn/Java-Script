// Введення даних

if (confirm('Почати тестування?')) {
  let pricesArr = [120, 360, 90, 180, 270, 50]
  let tax = 0.2

  // Обчислення
  let taxPaid = pricesArr.map(el => el * tax
  )

  document.write(`<div class="page__block"><div class="page__answer">      
  Масив цін, грн: ${pricesArr}<br><br>
  Масив податків, грн: ${taxPaid}
  </div ></div > 
  `)
}
