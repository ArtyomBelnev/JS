//task 1
// function Animal(name) {
//     this._foodAmount = 50;
//     this._name = name;
// }

// Animal.prototype._formatFoodAmount = function () {
//     return this._foodAmount + ' гр.';
// };

// Animal.prototype.dailyNorm = function (amount) {
//     if (!arguments.length) return this._formatFoodAmount();

//     if (amount < 50 || amount > 500) {
//         return 'Недопустимое количество корма.';
//     }

//     this._foodAmount = amount;
// };

// Animal.prototype.feed = function () {
//     console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
// };

// function Cat(name) {
//     Animal.apply(this, arguments);
// }

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;

// Cat.prototype.feed = function () {
//     Animal.prototype.feed.apply(this, arguments);
//     console.log('Кот доволен ^_^');
// };

// Animal.prototype.stroke = function () {
//     console.log('Гладим кота');
// }

// var cat = new Cat('Tom');

// console.log(cat._formatFoodAmount());
// cat.dailyNorm(143);
// cat.feed();

// //task 2
// s



// //task 3
// function deep(obj1, obj2) {


//     if (Object.keys(obj1).length != Object.keys(obj2).length) {
//         return false;
//     }

//     for (var key in obj1) {
//         if (obj1.hasOwnProperty(key) !== obj2.hasOwnProperty(key)) {
//             return false;
//         }

//         if (typeof (obj1[key]) === 'object') {
//             if (deep(obj1[key], obj2[key]) === false) {
//                 return false;
//             }
//         } else if (typeof obj1[key] === 'function') {
//             if (obj1[key].toString() !== obj2[key].toString()) {
//                 return false;
//             }
//         } else if (obj1[key] != obj2[key]) {
//             return false;
//         }

//     }
//     return true;
// };


// var initialObj = {
//     string: 'Vasya',
//     number: 30,
//     boolean: true,
//     undefined: undefined,
//     array: [1, 2, 3],
//     object: {
//         string2: 'Petrov',
//         object2: {
//             array2: [{}, {}]
//         },
//         object3: {}
//     },
//     method: function () {
//         alert('Hello');
//     }
// };

// var cloneObj = {
//     string: 'Vasya',
//     number: 30,
//     boolean: true,
//     undefined: undefined,
//     array: [1, 2, 3],
//     object: {
//         string2: 'Petrov',
//         object2: {
//             array2: [{}, {}]
//         },
//         object3: {}
//     },
//     method: function () {
//         alert('Hello');
//     }
// };


// console.log(deep(initialObj, cloneObj));



