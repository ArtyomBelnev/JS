var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

function deepClone(itemToClone) {
    var newObjOrArr = Array.isArray(itemToClone) ? [] : {};

    for (var key in itemToClone) {
        var currentVal = itemToClone[key];

        newObjOrArr[key] = (typeof currentVal === 'object' && currentVal !== null) ? deepClone(currentVal) : currentVal;
    }

    return newObjOrArr;
}

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);