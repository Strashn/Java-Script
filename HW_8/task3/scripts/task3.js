// Введення даних

let pupilsNames = [`Оля`, `Микола`, `Степан`, `Іван`, `Наталка`, `Оксана`, `Іван`, `Петро`, `Іван`]

// Обчислення
function getNumFindName(pupilsNames) {
  let numFindName = 0
  let findName = `Іван`
  for (let i = 0; i < pupilsNames.length; i++) {
    if (pupilsNames[i] === findName)
      numFindName++
  }
  return numFindName
}

document.write(`<div class = "page__block"><div class = "page__answer">
Масив імен учнів: Оля, Микола, Степан, Іван, Наталка, Оксана, Іван, Петро, Іван<br>
Ім’я Іван зустрічається ${getNumFindName(pupilsNames)} рази (раз)
</div></div>`)