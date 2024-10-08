// Введення даних

let nameArr = [`Nick`, `Natali`, `Peter`, `Matt`, `Irene`, `Serg`, `Olga`, `Ann`]
document.write(`<div class="page__block">`)
document.write(`<div class="page__answer">
Заданий масив ${nameArr}.<br><br>
</div>`)

// Обчислення

let searchName = `Olga`

function sortNames(nameArr) {
    return nameArr.sort()
}
let sortNameArr = sortNames(nameArr)

document.write(`<div class="page__answer">
Відсортований масив ${sortNameArr}.<br><br>
</div>`)

function binarySearch(arr, searchName) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        if (arr[middle] === searchName) return middle
        if (arr[middle] < searchName) start = middle + 1
        if (arr[middle] > searchName) end = middle - 1
    }
    return -1
}

let searchIndex = binarySearch(sortNameArr, searchName)

if (searchIndex !== -1)
    document.write(`<div class="page__answer">
    Iм'я ${searchName} входить у масив під індексом ${searchIndex}.
    </div>`)
else
    document.write(`<div class="page__answer">
    В заданому масиві немає імені ${searchName}.
    </div>`)
document.write(`</div>`)