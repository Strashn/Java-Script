// Введення даних

let pupilTable = [4, 2, 5, 3, 3, 5, 2, 4, 5]
// Обчислення

function getNumBadMark(pupilTable) {
    let numBadMark = 0
    for (let i = 0; i < pupilTable.length; i++) {
        if (pupilTable[i] === 2)
            numBadMark++
    }
    return numBadMark
}

function getNumGoodMark(pupilTable) {
    let numGoodMark = 0
    for (let i = 0; i < pupilTable.length; i++) {
        if (pupilTable[i] === 4 || pupilTable[i] === 5)
            numGoodMark++
    }
    return numGoodMark
}
function getAverageMark(pupilTable) {
    let sumMarks = 0
    for (let i = 0; i < pupilTable.length; i++) {
        sumMarks += pupilTable[i]
    }
    return sumMarks / pupilTable.length
}
function getNumMarksLessAverage(pupilTable) {
    let numMarksLessAverage = 0
    for (let i = 0; i < pupilTable.length; i++) {
        if (pupilTable[i] < getAverageMark(pupilTable))
            numMarksLessAverage++
    }
    return numMarksLessAverage
}
// Виведення результату

document.write(`<div class="page__block"><div class="page__answer">
Послідовність оцінок учня: ${pupilTable}<br>
Кількість двійок: ${getNumBadMark(pupilTable)} <br>
Кількість хороших оцінок (добре, відмінно): ${getNumGoodMark(pupilTable)}<br>
Середня оцінка: ${getAverageMark(pupilTable).toFixed(1)}<br>
Кількість оцінок, які нижче середнього: ${getNumMarksLessAverage(pupilTable)}
</div></div>
  `)