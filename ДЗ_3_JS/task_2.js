// Напиши функцію countProps(obj), яка рахує кількість властивостей в об 'єкті. Функція повертає число - кількість властивостей.


const countProps = function(obj) {
    let i = 0; // уважно з місцем ініціалізації змінної
    for (let key in obj) {

        i += 1;
    }
    return i;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3