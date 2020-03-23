// Решение 1:
function filterArr(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        var el = arr[i];

        if (el > 0) {
            newArr[newArr.length] = el;
        }
    }

    return newArr;
}

filterArr([-1, 0, 2, 34, -2]);

// Решение 2:
function mapObj(obj) {
    for (var key in obj) {
        obj[key + '_length'] = obj[key].length;
        delete obj[key];
    }

    return obj;
}

mapObj({name: 'Vasya'});

// Решение 3:
function isRomantic(gender) {
    gender = gender || 'Неизвестно';

    return (gender === 'Мужской') ? false : (gender === 'Женский') ? true : (gender === 'Неизвестно') && alert('Неизвестно');
    // return (gender === 'Неизвестно') ? alert('Неизвестно') : !(gender === 'Мужской') && (gender === 'Женский');
}

isRomantic('Мужской');
isRomantic('Женский');
isRomantic();
isRomantic('asdf');

// Решение 4 *:
function mapObj(obj) {
    var duplicates = {},
        propsInDuplicates = 0;

    for (var compareKey in obj) {
        var counter = 0,
            temporaryValue = obj[compareKey];

        for (var matchKey in obj) {
            if (temporaryValue === obj[matchKey]) {
                counter++;

                obj[matchKey + '_length'] = obj[matchKey].length;
                delete obj[matchKey];
            }
        }

        if (counter > 1) {
            duplicates[temporaryValue] = counter + ' times';
            propsInDuplicates++;
        }
    }

    if (propsInDuplicates > 0) {
        obj['Duplicate values'] = duplicates;
    }

    return obj;
}

mapObj({
    name_one: 'Fedya',
    name_two: 'Piotr',
    name_tree: 'Fedya',
    name_four: 'Piotr',
    name_five: 'Fedya',
    name_six: 'Piotr'
});