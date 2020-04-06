// task 1
// Переписать задачу с использованием перебирающего метода массивов:
//       function filterNumbersArr(numbers) {
//           var newArr = [];

//           for (var i = 0; i < numbers.length; i++) {
//               var el = numbers[i];

//               if (el > 0) {
//                   newArr[newArr.length] = el;
//               }
//           }

//           return newArr;
//       }

//       filterNumbersArr([-1, 0, 2, 34, -2]);

function filterNumbersArr(arr) {

    var filterNumbers = arr.filter(function (numbers) {
        return numbers > 0;
    });

    console.log(filterNumbers);
}

filterNumbersArr([-1, 0, 2, 34, -2]);

// task 2
// Написать функцию, принимающую массив чисел и возвращающую первое найденное положительное число.

function findNumber(arr) {

    var foundArr = arr.find(function (numbers) {
        return numbers > 0;
    })

    console.log(foundArr);
}

findNumber([0, -1, 2, -2, 3]);

// task 3 
// Написать функцию, которая будет определять, является ли переданное в нее слово палиндромом (напр. шалаш).
//     Регистр в словах учитываться не должен. Тестировать функцию можно только на одиночных словах (без фраз).

// Функция должна работать следущим образом:
// isPalindrome('шалаШ'); // true
// isPalindrome('привет'); // false

function isPalindrome(words) {
    var value,
        valueNew;

    value = words.toLowerCase();

    valueNew = value.split('').reverse().join('');

    if (value === valueNew) {
        return true;
    }
    return false;

}

console.log(isPalindrome('шалаШ'));
console.log(isPalindrome('привет'));

// task 4
// Написать функцию, которая будет определять, являются ли переданные в нее слова анаграммами (напр. кот и отк).
// Регистр в словах учитываться не должен.

// Функция должна работать следущим образом:
//   areAnagrams('кот', 'отк'); // true
//   areAnagrams('кот', 'атк'); // false
//   areAnagrams('кот', 'отко'); // false

function areAnagrams(words1, words2) {
    var value,
        valueNew;

    value = words1.toLowerCase().split('').sort().join();
    valueNew = words2.toLowerCase().split('').sort().join();

    if (value === valueNew) {
        return true;
    }
    return false;
}

console.log(areAnagrams('кот', 'отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));

// task 5
// Написать функцию, которая будет разбивать массив на под-массивы определенной длины.

//     Функция должна работать следущим образом:
//       divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
//       divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]

function divideArr(arr, size) {
    var newArr = [];

    for (var i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }

    console.log(newArr);
}

divideArr([1, 2, 3, 4], 2);
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);