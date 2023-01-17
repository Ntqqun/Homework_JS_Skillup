// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

const findBestEmployee = function(employees) {

    let arrValues = []
    let arrKeys = []
    for (let value in employees) {
        arrValues.push(employees[value])
        arrKeys.push(value)
    } // увага на те чи цикла в циклі треба !!!

    let max = arrValues[0]
    let res = arrKeys[0] // знову ж таки важливо у якому місці і як ініціалізую змінну
    for (let i = 0; i < arrValues.length; i += 1) {

        if (max < arrValues[i]) {
            max = arrValues[i];
            res = arrKeys[i]
        }
    }


    return res
};


console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux