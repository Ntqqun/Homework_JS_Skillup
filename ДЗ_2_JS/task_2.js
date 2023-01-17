// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова,
//  і повертає ціну гравіювання всіх слів в рядку.



let calculateEngravingPrice = function(message, pricePerWord) {
    let words = message.split(" ")
    let numOfWorsds = words.length
    let res = numOfWorsds * pricePerWord
    return `Ціна гравіювання всіх слів = ${res} грн`
}


console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        10,
    ),
); // 80

console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        20,
    ),
); // 160

console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120