// Введення даних

let userAge = parseInt(prompt('Введіть вік', '25'))

// Обчислення

if (userAge <= 7)
  document.write(`<div class="page__answer">
    Ви дитина 
    </div>
    `)
else if (userAge <= 17)
  document.write(`<div class="page__answer">
    Ви школяр 
    </div>
    `)
else if (userAge <= 23)
  document.write(`<div class="page__answer">
    Ви студент 
    </div>
    `)
else if (userAge <= 60)
  document.write(`<div class="page__answer">
    Ви працівник 
    </div>
    `)
else
  document.write(`<div class="page__answer">
    Ви пенсіонер 
    </div>
    `)