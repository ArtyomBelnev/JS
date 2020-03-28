// task 1

function names(arr) {

    return arr.map(function (val) {
        var b = {};
        b.name = val;
        return b;
    });
}

console.log(names(['Вася', 'Петя', '']));

// task 2

function pushTime(arr) {

    var result = arr.reduce(function (v, r) {
        return v + (' : ' + r)
    });

    return 'Текущее время : ' + result;
}

console.log(pushTime(['00', '13', '24']));

// task 3

function testWords(words) {
    var counter = 0;
    var vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];

    words.split('').forEach(function (item1) {
        vowels.forEach(function (item2) {
            if (item1 === item2) {
                counter += 1;
            }
        });
    });

    return counter;
}

console.log(testWords('Топорный'));

// task 4

function countSentencesLetters(str) {
    var arr = str.split(/[.!?]/);
    var rezult = '';
    
   for (var i = 0; i < arr.length; i++) {
        if(arr[i].length > 1 ) {
            rezult += arr[i].trim() + ': Letters quantiti is: ' + arr[i].trim().split(/[,' ']/).join('').length + '\n';
        }
    }; 

 return rezult;
}

console.log(countSentencesLetters('Привет, студент! Студент... Как дела, студент?'));





