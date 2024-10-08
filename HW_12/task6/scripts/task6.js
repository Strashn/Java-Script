// Введення даних

let nameArr = [`Nick`, `Natali`, `Peter`, `Matt`, `Iren`, `Serg`, `Olga`, `Ann`]
document.write(`<div class="page__block">`)
document.write(`<div class="page__answer">
Заданий масив ${nameArr}.<br><br>
</div>`)

// Обчислення

function sortNamesLength(arr) {
    for (let k = 1; k < arr.length; k++) {
        const currentElement = arr[k]
        let i = k - 1

        while (i >= 0 && arr[i].length > currentElement.length) {
            arr[i + 1] = arr[i]
            i--
        }
        arr[i + 1] = currentElement
    }
    return arr
}
let namesLength = sortNamesLength(nameArr)

document.write(`<div class="page__answer">
Відсортований масив ${namesLength}.<br><br>
</div>`)

let searchNameLength = 5

function binarySearch(arr, searchNameLength) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        if (arr[middle].length === searchNameLength) return middle
        if (arr[middle].length < searchNameLength) start = middle + 1
        if (arr[middle].length > searchNameLength) end = middle - 1
    }
    return -1
}
let searchNameIndex = binarySearch(namesLength, searchNameLength)

if (searchNameIndex !== -1)
    document.write(`<div class="page__answer">
    Iм'я довжиною ${searchNameLength} символів входить у масив під індексом ${searchNameIndex}.
    </div>`)
else
    document.write(`<div class="page__answer">
    В заданому масиві немає імені довжиною ${searchNameLength}.
    </div>`)