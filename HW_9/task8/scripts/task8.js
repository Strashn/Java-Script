// Введення даних

if (confirm(`Почати тестування`)) {

  let userCarNumbers = [`AB234SA`, `BC451KK`, `FD874AB`, `AS567BB`, `AM179CD`, `KB374HC`]

  //   // Обчислення

  let numStartLetterA = userCarNumbers.filter(el => el[0] === `A`
  )

  document.write(`<div class="page__block"><div class="page__answer"> 
    Заданий масив: ${userCarNumbers}<br><br>     
    Масив номерів, які починаються з букви А: ${numStartLetterA}
    </div></div>
    `)
}