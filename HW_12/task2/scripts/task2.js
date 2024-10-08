// Введення даних

let arr = [30, 1, 29, 2, 28, 3, 27, 4, 26, 5, 25, 6, 24, 7, 23, 8, 22, 9, 21, 10, 20, 11, 19, 12, 18, 13, 17, 14, 16, 15]
document.write(`<div class="page__answer">
Першоначальний масив: ${arr}<br><br>`)
document.write(`</div>`)

// Розрахунок

let leftIndex = 0;
let rightIndex = arr.length - 1;
let comparison = 0;
let swap = 0;

while (leftIndex < rightIndex) {
  for (let i = leftIndex; i < rightIndex; i++) {
    comparison++;
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
      swap++;
    }
  }
  rightIndex--;

  for (let i = rightIndex; i > leftIndex; i--) {
    comparison++;
    if (arr[i] < arr[i - 1]) {
      let temp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = temp;
      swap++;
    }
  }
  leftIndex++;
}

document.write(`<div class="page__answer">
  Відсортований масив: ${arr}<br><br>
  Кількість порівнянь: ${comparison}<br><br>
  Кількість обмінів: ${swap}
   </div>`)