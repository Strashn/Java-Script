// Введення даних

if (confirm(`Почати тестування`)) {

  let userNames = [`Микола`, `Ірина`, `Оксана`, `Андрій`, `Павло`, `Наталка`]

  // Обчислення

  let firsLetter = userNames.map(el => el[0]
  )

  document.write(`<div class="page__block"><div class="page__answer"> 
  Заданий масив: ${userNames} <br><br>   
  Масив, ствoрений з перших букв імен: ${firsLetter}
  </div></div>
  `)
}