// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова,
//  і повертає ціну гравіювання всіх слів в рядку.


// let arr = str.split(" ")[1].split('')
// console.log(arr.length)
// console.log(str.split(" ").split('').length)
// console.log(str.split(" ").length) // 3

// let calculateEngravingPrice = function(message, pricePerWord) {
//     for (let i = 0; i < message.split(" ").length; i += 1) {
//         let sum = 0
//         let pricePerLetter = message.split(" ")[i].length * pricePerWord
//         sum += pricePerLetter;
//     }
//     console.log(sum);
// };
// // console.log(calculateEngravingPrice(str, price))
// calculateEngravingPrice(str, price)


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