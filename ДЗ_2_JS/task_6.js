// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.

// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.

// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

//  Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат prompt записувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.

let input = prompt("Enter the number");
let num = Number(input)
let numbers = []
let total = 0;
numbers.push(num)


function Suma() {
    while (input) { // не робити input != null а робити input
        input = prompt("Enter the number");
        num = Number(input)
        numbers.push(num)

    }


    if (!input) { // не  робити input == null а робити !input
        for (let i = 0; i < numbers.length; i += 1) {
            total += numbers[i]

        }
        console.log(`Загальна сума чисел дорівнює ${total}`)
    }
}

Suma()