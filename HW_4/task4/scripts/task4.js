// Введення даних

if (confirm('Почати тестування?')) {
  let userLength = parseInt(prompt('Введіть кількість квадратів для гри', '10'))
  let userShot = parseInt(prompt('Введіть номер квадрату для пострілу від 1 до ${userLength}', '8'))

  const randomPosition = 1 + Math.floor(Math.random() * userLength)
  // Обчислення

  if (userShot === randomPosition) {
    document.write(`<div class= "page__answer">
  Корабель потоплено, вітаю! Корабель знаходився на позиції ${randomPosition}
    </div>
  `)
  }
  else {
    if (Math.abs(userShot - randomPosition) === 1) {
      alert('Корабель пошкоджено, спробуйте ще раз')
    } else {
      alert('Повз, спробуйте ще раз')
    }

    userShot = parseInt(prompt('Введіть номер квадрату для пострілу від 1 до ${userLength}', '5'))

    if (userShot === randomPosition)
      document.write(`<div class= "page__answer">
    Корабель потоплено, вітаю! Корабель знаходився на позиції ${randomPosition}
    </div>
  `)
    else if
      (Math.abs(userShot - randomPosition) === 1)
      document.write(`<div class= "page__answer">
    Корабель пошкоджено, але гру закінчено. Корабель знаходився на позиції ${randomPosition}
    </div>
  `)
    else
      document.write(`<div class= "page__answer">
    Повз, ви програли :(  Корабель знаходився на позиції ${randomPosition}
    </div>
  `)
  }
}