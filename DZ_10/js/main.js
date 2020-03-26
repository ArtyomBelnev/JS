// task 1

// function Name(arr) {
//     var a = [];

//     arr.forEach(function (name, i, arr) {
//         var b = {};
//         a.push(b);
//         b.name = arr[i];
//     });
//     return a;
// }

// console.log(Name(['Вася', 'Петя', '']));

// task 2

// function pushTime(arr) {
//     var a = '';
//     // return 'Текущее время: ' + arr.join(':');

//     arr.forEach(function (item, i, arr) {
//         a += ': ' + item;
//     });
//     return 'Текущее время ' + a;
// }

// console.log(pushTime(['00', '13', '24']));

// task 3

// function testWords(words) {
//     var counter = 0;
//     var vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];

//     words.split('').forEach(function (item1, i) {
//         vowels.forEach(function (item2, j) {
//             if (item1 === item2) {
//                 counter += 1;
//             }
//         });
//     });

//     return counter;
// }

// console.log(testWords('Топорный'));


