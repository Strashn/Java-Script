// Введення даних
if (confirm('Почати тестування?')) {
    let userNumSides = parseInt(prompt(`Введіть кількість сторін багатокутника`, `6`))

    // Обчислення
    let userNamePoligon

    switch (userNumSides) {
        case 1: userNamePoligon = 'таких багатокутників не існує'
        case 2: userNamePoligon = 'таких багатокутників не існує'
            break;
        case 3: userNamePoligon = `трикутник`
            break;
        case 4: userNamePoligon = `чотирикутник`
            break;
        case 5: userNamePoligon = `п'ятикутник`
            break;
        case 6: userNamePoligon = `шестикутник`
            break;
        case 7: userNamePoligon = `семикутник`
            break;
        case 8: userNamePoligon = `восьмикутник`
            break;
        default: userNamePoligon = `${userNumSides}-кутник`
            break;
            console.log(userNamePoligon)
    }

    document.write(`<div class= "page__answer">
        Ваш багатокутник - ${userNamePoligon}
        </div>
    `)
}