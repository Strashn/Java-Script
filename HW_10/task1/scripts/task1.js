// Введення даних

if (confirm('Почати тестування?')) {

  let userNumberSecurities = (parseInt(prompt(`Введіть кількість цінних паперів`, `8`)))

  // Обчислення

  document.write(`<ol class="page__list">`)

  // 1. Формування історії цінних паперів
  function getSecuritiesPrices(userNumberSecurities) {
    let securitiesPrices = []

    for (let i = 0; i < userNumberSecurities; i++) {
      let randPrice = 1 + Math.floor(Math.random() * 10000)
      securitiesPrices.push(randPrice)
    }
    return securitiesPrices
  }
  let securitiesPrices = getSecuritiesPrices(userNumberSecurities)
  document.write(`<li class="item">Історія цін цінних паперів: ${securitiesPrices}</li>`)

  // 2. Формування масиву паперів більших за 1000
  let pricesMore1000 = securitiesPrices.filter(element => element > 1000)
  document.write(`<li class="item">Масив з цінних паперів більших за 1000: ${pricesMore1000}</li>`)

  // 3. Формування масиву номерів цінних паперів більших за 1000

  let indexPricesMore1000 = securitiesPrices.reduce((arr, element, index) => {
    if (element > 1000) arr.push(index)
    return arr
  }, [])

  document.write(`<li class="item">Масив номерів цінних паперів більших за 1000: ${indexPricesMore1000}</li>`)

  // 4. Формування масиву цін, більших за попереднє значення

  let pricesMorePrevious = securitiesPrices.filter((element, index) =>
    index > 0 && element > securitiesPrices[index - 1])

  document.write(`<li class="item">Масив цін цінних паперів більших за попередню ціну ${pricesMorePrevious}</li>`)

  // 5. Формування масиву, що міститиме значення цін у відсотках відносно максимального

  let maxPrice = Math.max(...securitiesPrices)
  let pricesPercentToMax = securitiesPrices.map(element =>
    (element * 100) / maxPrice
  )

  document.write(`<li class="item">Масив зі значеннями цін у відсотках відносно максимального ${pricesPercentToMax}</li>`)

  // 6. Підрахунок кількості змін цін

  let priceChanges = securitiesPrices.reduce((sumPriceChanges, el, index, arr) => {
    if (index > 0 && el !== arr[index - 1]) sumPriceChanges++
    return sumPriceChanges
  }, 0)

  document.write(`<li class="item">Сумарна кількість змін цін ${priceChanges}</li>`)

  // 7. Визначеення, чи є ціна, що менше 1000

  if (securitiesPrices.some((price) =>
    price < 1000))
    document.write(`<li class="item">Є ціна менша за 1000</li>`)
  else
    document.write(`<li class="item">Немає ціни меншою за 1000</li>`)

  // 8. Визначення, чи усі ціни більше за 1000

  if (securitiesPrices.every((price) =>
    price > 1000))
    document.write(`<li class="item">Всі ціни більші за 1000</li>`)
  else
    document.write(`<li class="item">Не всі ціни більші за 1000</li>`)

  // 9. Підрахунок кількості цін, що більше за 1000

  let numPricesMore1000 = securitiesPrices.reduce((sumMore1000, el) =>
    el > 1000 ? sumMore1000 + 1 : sumMore1000
    , 0)
  document.write(`<li class="item">Кількість цін, більших за 1000: ${numPricesMore1000}</li>`)

  // 10. Підрахунок суми цін, що більше за 1000

  let sumPricesMore1000 = pricesMore1000.reduce((sumPrices, el) =>
    sumPrices + el
  )
  document.write(`<li class="item">Сума цін, більших за 1000: ${sumPricesMore1000}</li>`)

  // 11. Знайти першу ціну, що більше за 1000

  let firstPriceMore1000 = securitiesPrices.find(el =>
    (el > 1000)
  )
  document.write(`<li class="item">Перша ціна, що більше за 1000: ${firstPriceMore1000}</li>`)

  // 12. Знайти індекс першої ціни, що більше за 1000

  let firstIndexPriceMore1000 = securitiesPrices.findIndex(el =>
    (el > 1000)
  )
  document.write(`<li class="item">Індекс першої ціни, що більше за 1000: ${firstIndexPriceMore1000}</li>`)

  // 13. Знайти останню ціну, що більше за 1000

  let lastPriceMore1000 = securitiesPrices.findLast(el =>
    (el > 1000)
  )
  document.write(`<li class="item">Остання ціна, що більше за 1000: ${lastPriceMore1000}</li>`)

  // 14. Знайти індекс останньої ціни, що більше за 1000

  let lastIndexPriceMore1000 = securitiesPrices.findLastIndex(el =>
    (el > 1000)
  )
  document.write(`<li class="item">Індекс останньої ціни, що більше за 1000: ${lastIndexPriceMore1000}</li>`)


  document.write(`</ol>`)
}