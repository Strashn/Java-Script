// Введення даних
if (confirm('Почати тестування?')) {
  let userNumber = parseInt(prompt('Введіть довільне число від 1 до 100', '88'))

  const minInterval = 1
  const maxInterval = 100

  // Розрахунок

  let randomA = 1 + Math.floor(Math.random() * (maxInterval - minInterval + 1))
  let randomB = 1 + Math.floor(Math.random() * (maxInterval - minInterval + 1))

  if (randomB >= randomA) {
    randomMaxInterval = randomB
    randomMinInterval = randomA
  } else {
    randomMaxInterval = randomA
    randomMinInterval = randomB
  }

  if (userNumber <= randomMaxInterval + 10 && userNumber >= randomMinInterval - 10) {
    document.write(`<div class="page__answer">
  Ви виграли. Інтервал ${randomMinInterval} - ${randomMaxInterval}</div>
`)
  } else {
    document.write(`<div class="page__answer">
  Ви програли. Інтервал ${randomMinInterval} - ${randomMaxInterval}</div>
`)
  }
}