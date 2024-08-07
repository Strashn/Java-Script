// Введення даних

let randomNumber = 1 + Math.floor(Math.random() * 5)
let userNumber1 = parseInt(prompt('Вгадайте число від 1 до 5, перша спроба', '3'))


// Обчислення

if (userNumber1 === randomNumber)
  document.write(`<div class="page__answer">
Ви вгадали число ${randomNumber}, вітаю! </div>
  `)
else {
  alert`(Ви не вгадали, спробуйте останній раз)`

  let userNumber2 = parseInt(prompt('Вгадайте число від 1 до 5, друга і остання спроба', '4'))

  if (userNumber2 === randomNumber)
    document.write(`<div class="page__answer">
    Ви вгадали ${randomNumber}   вітаю! </class=>
    `)
  else
    document.write(`<div class="page__answer" >
    Ви не вгадали число ${randomNumber}, пощастить у коханні </div>
    `)
}