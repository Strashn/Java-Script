// Введення даних

if (confirm('Почати тестування?')) {
  let randomNumber = 1 + Math.floor(Math.random() * 10)
  let userNumber1 = parseInt(prompt('Перший ігрок: Вгадайте число від 1 до 10', '3'))
  let userNumber2 = parseInt(prompt('Другий ігрок: Вгадайте число від 1 до 10', '7'))

  // Обчислення
  console.log(randomNumber)
  let userDiff1 = Math.abs(randomNumber - userNumber1)
  let userDiff2 = Math.abs(randomNumber - userNumber2)

  if (userDiff1 === userDiff2)
    document.write(`<div class="page__answer">
  Виграли обоє, загадане число ${randomNumber}, вітаю! </div>
  `)
  else if (userDiff1 > userDiff2)
    document.write(`<div class="page__answer">
  Виграв другий ігрок, загадане число ${randomNumber}, вітаю! </div>
  `)

  else
    document.write(`<div class="page__answer" >
    Виграв перший ігрок, загадане число ${randomNumber}, вітаю! </div>
    `)
}