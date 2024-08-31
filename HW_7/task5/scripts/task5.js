// Введення даних
if (confirm('Почати тестування?')) {
    let userCmToInch = (parseFloat(prompt(`Введіть довжину у сантиметрах`, `254`)))
    let userKgToPound = (parseFloat(prompt(`Введіть вагу в кілограмах)`, `68`)))
    let userKmToMile = (parseFloat(prompt(`Введіть відстань у кілометрах`, `777`)))

    // Обчислення

    function getInches(cm) {
        return cm / 2.54
    }
    getInches(userCmToInch)

    function getPounds(kg) {
        return kg * 2.20462262185
    }
    getPounds(userKgToPound)

    function getMiles(km) {
        return km / 1.6093445
    }
    getMiles(userKmToMile)

    // Виведення результату

    document.write(`<div class="page__block"><div class="page__answer">
Довжина у ${userCmToInch} см дорівнює ${getInches(userCmToInch).toFixed(2)} дюймів.<br>
Вага у ${userKgToPound} кг дорівнює ${getPounds(userKgToPound).toFixed(2)} фунтів.<br>
Відстань у ${userKmToMile} км дорівнює ${getMiles(userKmToMile).toFixed(2)} миль.<br>
</div></div>
  `)
}