// Введення даних

let arr = [30, 1, 29, 2, 28, 3, 27, 4, 26, 5, 25, 6, 24, 7, 23, 8, 22, 9, 21, 10, 20, 11, 19, 12, 18, 13, 17, 14, 16, 15]

document.write(`<div class="page__block">`)
document.write(`<div class="page__answer">
Першоначальний масив: ${arr}<br><br>`)
document.write(`</div>`)

// Обчислення

let comparison = 0
let swap = 0

for (let k = 1; k < arr.length; k++) {
  const currentElement = arr[k]
  let i = k - 1
  comparison++

  while (i >= 0 && arr[i] > currentElement) {
    comparison++
    swap++
    arr[i + 1] = arr[i]
    i--
  }
  arr[i + 1] = currentElement
}

document.write(`<div class="page__answer">
  Відсортований масив: ${arr}<br><br>
  Кількість порівнянь: ${comparison}<br><br>
  Кількість обмінів: ${swap}
   </div>`)
document.write(`</div>`)