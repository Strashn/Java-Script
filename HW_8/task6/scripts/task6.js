// Введення даних

if (confirm('Почати тестування?')) {

    let productPrices = [30, 50, 350, 690, 5000]
    let productTitles = [`milk`, `tomato`, `cheese`, `cake`, `airgrill`]
    let usersMoney = parseFloat(prompt(`Введіть кількість грошей`))

    // Обчислення

    function getProduct(productPrice, productTitle, usersMoney) {
        let availableProducts = []
        for (let i = 0; i < productPrice.length; i++) {
            if (productPrice[i] <= usersMoney)
                availableProducts.push(productTitles[i])
        }
        return availableProducts
    }

    document.write(`<div class="page__block><div class="page__answer>
             Можете купити: ${getProduct(productPrices, productTitles, usersMoney)}
    </div></div>`)
}