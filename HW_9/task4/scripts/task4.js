// Введення даних
if (confirm('Почати тестування?')) {

  let elements = [45, 215, 336, 67, 897, 22, 148]

  document.write(`<div class = "page__answer"><ul class="page__list">
Заданий масив елементів: ${elements}<br>
Елементи більше 100:`)

  // Обчислення

  let boundaryNumber = 100

  for (let element of elements) {
    if (element > boundaryNumber)
      document.write(`<li>${element}</li>
      `)
  }
}
document.write(`</div></ul>`)