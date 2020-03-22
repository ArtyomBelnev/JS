// task 1

function filterNumbersArr(arr) {

    var filterNumbers = arr.filter(function(numbers) {
        return numbers > 0;
    });

    console.log(filterNumbers);
}

filterNumbersArr([-1, 0, 2, 34, -2]);

// task 2

function findNumber(arr) {

    var foundArr = arr.find(function(numbers) {
        return numbers > 0;
    })
    
    console.log(foundArr);
}

findNumber([0, -1, 2, -2, 3]);

// task 3 

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

function areAnagrams(words1,words2) {
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

function divideArr(arr,size) {
    var newArr = [];

    for (var i = 0; i <arr.length; i+= size) {
        newArr.push(arr.slice(i, i + size)); 
    }

    console.log(newArr);
}

divideArr([1, 2, 3, 4], 2);
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);