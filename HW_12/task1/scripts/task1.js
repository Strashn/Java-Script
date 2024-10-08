// Введення даних

let arr = [30, 1, 29, 2, 28, 3, 27, 4, 26, 5, 25, 6, 24, 7, 23, 8, 22, 9, 21, 10, 20, 11, 19, 12, 18, 13, 17, 14, 16, 15]
document.write(`<div class="page__answer">
Першоначальний масив: ${arr}<br><br>`)
document.write(`</div>`)

// Розрахунок

let changed
let comparison = 0
let swap = 0

do {
  changed = false;
  for (let i = 1; i < arr.length; i++) {
    comparison++
    if (arr[i - 1] > arr[i]) {
      let temp = arr[i - 1]
      arr[i - 1] = arr[i]
      arr[i] = temp
      changed = true
      swap++
    }
  }
} while (changed)


document.write(`<div class="page__answer">
Відсортований масив: ${arr}<br><br>
Кількість порівнянь: ${comparison}<br><br>
Кількість обмінів: ${swap}
 </div>`)