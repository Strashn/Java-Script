// Введення даних

if (confirm('Почати тестування?')) {

    let arr = [3, -2, -5, 4, -3, 5, 2, -4, 5]
    document.write(`<div class="page__block><div class="page__answer>
    Заданий масив: ${arr}
</div></div>`)
    // Обчислення

    arr.forEach((el, index, arr) => el > arr[0] ? arr[index] *= 2 : el)

    document.write(`<div class="page__block><div class="page__answer>
        Перетворений масив: ${arr}
    </div></div>`)
}