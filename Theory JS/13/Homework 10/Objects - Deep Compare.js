var a = {
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

var b = {
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

function areEqual(a, b) {
    if (Object.keys(a).length === Object.keys(b).length) {
        for (var prop in a) {
            if (a.hasOwnProperty(prop) && b.hasOwnProperty(prop)) {
                var currentAVal = a[prop],
                    currentBVal = b[prop];

                if (typeof currentAVal === 'object' && currentAVal !== null) {
                    if (!areEqual(currentAVal, currentBVal)) return false;
                } else if (typeof currentAVal === 'function') {
                    if (currentAVal.toString() !== currentBVal.toString()) return false;
                } else if (currentAVal !== currentBVal) return false;
            } else {
                return false;
            }
        } return true;
    } return false;
}

console.log(areEqual(a, b));