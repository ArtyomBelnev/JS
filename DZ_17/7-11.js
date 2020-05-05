// task 7
// Написать функцию, принимающую массив объектов вида:
// [
// {name: 'Vasya Pupkin', age: 25},
// {name: 'Ivan Petrov', age: 30},
// {name: 'Fedor Ivanov', age: 42}
// ]
// и возвращающую объект вида:
// {
// Пользователи младше 40: [
// {name: 'Vasya Pupkin', age: 25},
// {name: 'Ivan Petrov', age: 30}
// ],
// Пользователь с именем Федор: {name: 'Fedor Ivanov', age: 42}
// }
// Для свойства "Пользователь с именем Федор" осуществлять поиск объекта по имени, которое начинается с подстроки Fedor.

{
    const info = [
        { name: 'Vasya Pupkin', age: 25 },
        { name: 'Ivan Petrov', age: 30 },
        { name: 'Fedor Ivanov', age: 42 }
    ];

    function f7(arr) {
        const testAge = arr.filter(item => item.age < 40);
        const getUser = arr.find(item => item.name.startsWith('Fedor'));

        return { 'Пользователи младше 40': testAge, 'Пользователь с именем Федор': getUser }
    }

    console.log(f7(info));
}

// task 8
// Написать функцию, принимающую массив имен пользователей и возвращающую массив объектов вида:
// [
//     { Пользователь 1: 'Вася' },
//     { Пользователь 2: 'Петя' }
// ]

{
    const names = ['Вася', 'Петя', 'Толя', 'Леня', 'Миша'];

    function f8(arr) {

        return arr.map((v, i) => ({ [`Пользователь ${i + 1}`]: v }));

    }

    console.log(f8(names));
}

// 'Пользователь ' + (i+1)

// task 9
// Написать функцию, принимающую массив объектов и объединяющую их в один новый объект. Например:
// [
// {name: 'Vasya'},
// {name: 'Piotr', age: 25},
// {salary: '2000$'}
// ]
// необходимо преобразовать в
// {
// name: 'Piotr',
// age: 25,
// salary: '2000$'
// }
// Spread-оператор не использовать. Использовать перебирающий метод массивов. Старые объекты не должны преобразовываться.

{
    const userList = [
        { name: 'Vasya' },
        { name: 'Piotr', age: 25 },
        { salary: '2000$' }
    ];

    function f9(arr) {

        const newList = {}

        return arr.reduce((acc, item) => (Object.assign(newList, item)));
    }

    console.log(f9(userList));
    console.log(userList);
}

// task 10
// Переписать последнее задание с ООП на новый синтаксис. Проверить работоспособность всех методов.

{

    class Animal {
        constructor(name) {
            this.name = name;
            this._foodAmount = 50;
        }

        _formatFoodAmount() {
            return `${this._foodAmount} гр.`
        };

        dailyNorm(amount) {

            if (!arguments.length) return this._formatFoodAmount();

            if (amount < 50 || amount > 500) {
                return 'Недопустимое количество корма.';
            }

            this._foodAmount = amount;
        };

        feed() {
            console.log(`Насыпаем в миску ${this.dailyNorm()} корма.`)
        };
    };

    class Cat extends Animal {
        constructor(name) {
            super(name);
        }
        feed() {
            super.feed();
            console.log('Кот доволен ^_^');
            return this;
        };
        stroke() {
            console.log('Гладим кота.');
            return this;
        };
    };

    let barsik = new Cat('Барсик');
    console.log(barsik.feed().stroke().stroke().feed());
    barsik = null;
}

// task 11
// Написать функцию-промис, которая принимает в себя 2 целых числа и выводит в консоль числа, входящие в диапазон,
// каждую секунду. После окончания работы интервала в консоль должно вывестись последнее запомненное число.
// Если в функцию первым параметром было передано бОльшее число - значения параметров следует поменять местами.
// В случае, если в функцию были переданы не целые числа - промис должен быть завершен неуспешно.

{
    function createFirstPromise(x, y) {

        return new Promise((resolve, reject) => {

            if (x > y) [y, x] = [x, y];

            let timer = setInterval(function () {
                if (!Number.isInteger(x, y)) {
                    reject('Промис завершен неуспешно');
                    clearInterval(timer);
                    return;
                } else if (x <= y) {
                    console.log(x++);
                } else {
                    resolve(x - 1);
                    clearInterval(timer);
                }
            }, 1000);
        });
    }

    createFirstPromise(12, 2)

        .then(x => console.log(`Последнее запомненное число: ${x}`))
        .catch(error => console.log(error))
}