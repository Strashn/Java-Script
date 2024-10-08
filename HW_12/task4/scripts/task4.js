// Введення даних

let arr = [3, 5, 1, 4, 2]
document.write(`<div class="page__block">`)
document.write(`<div class="page__answer">
Першоначальний масив: ${arr}<br><br>
</div>`)

// Обчислення

document.write(`<div class="page__answer">
Сортування бульбашкою<br>
</div>`)
let changed

do {
  changed = false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      let temp = arr[i - 1]
      arr[i - 1] = arr[i]
      arr[i] = temp
      changed = true
    }
  }
  document.write(`<div class="page__answer">${arr}<br></div>`)
} while (changed)

document.write(`<div class="page__answer"><br>
Сортування змішуванням<br>
</div>`)
let leftIndex = 0;
let rightIndex = arr.length - 1;

while (leftIndex < rightIndex) {
  for (let i = leftIndex; i < rightIndex; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
      document.write(`<div class="page__answer">
      ${arr}<br>
      </div>`)
      console.log(arr)
    }
  }
  rightIndex--;

  for (let i = rightIndex; i > leftIndex; i--) {
    if (arr[i] < arr[i - 1]) {
      let temp = arr[i - 1];
      arr[i - 1] = arr[i];
      arr[i] = temp;
      document.write(`<div class="page__answer">
      ${arr}<br>
      </div>`)
      console.log(arr)
    }
  }
  leftIndex++;
  document.write(`<div class="page__answer">${arr}<br></div>`)
}

document.write(`<div class="page__answer"><br>
Сортування включеннями<br>
</div>`)

for (let k = 1; k < arr.length; k++) {
  const currentElement = arr[k]
  let i = k - 1

  while (i >= 0 && arr[i] > currentElement) {
    arr[i + 1] = arr[i]
    i--
  }
  arr[i + 1] = currentElement

  document.write(`<div class="page__answer">${arr}<br></div>`)
}
document.write(`</div>`)