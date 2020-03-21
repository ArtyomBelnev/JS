// // task 1
function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
}

Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');
    return this;
};

Animal.prototype.stroke = function () {
    console.log('Гладим кота');
    return this;
}

var cat = new Cat('Tom');

console.log(cat._formatFoodAmount());
cat.dailyNorm(143);
cat.feed().stroke().stroke();



//task 2
function cloneObj(obj) {

    if (Array.isArray(obj)) {
        objNew = [];
    } else if (obj instanceof Object) {
        var objNew = {};
    }

    for (var key in obj) {
        if (Array.isArray(obj[key])) {
            objNew[key] = cloneObj(obj[key]);
        } else if (obj[key] instanceof Object && !(obj[key] instanceof Function)) {
            objNew[key] = cloneObj(obj[key]);
        }
        else {
            objNew[key] = obj[key];
        }
    }

    return objNew;
}

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
    method: function () {
        alert('Hello');
    }
};

var clonedObj = cloneObj(initialObj);

// clonedObj.object.object3[0] = 'CoronaVirus';
// clonedObj.array.push(2020);

console.log(initialObj);
console.log(clonedObj);



// //task 3
function deep(obj1, obj2) {


    if (obj1 !== null && (Object.keys(obj1).length !== Object.keys(obj2).length)) {
        return false;
    }

    for (var key in obj1) {
        if (obj1.hasOwnProperty(key) !== obj2.hasOwnProperty(key)) {
            return false;
        }      

        if (typeof (obj1[key]) === 'object') {
            if (deep(obj1[key], obj2[key]) === false) {
                return false;
            }
        } else if (typeof obj1[key] === 'function') {
            if (obj1[key].toString() !== obj2[key].toString()) {
                return false;
            }
        } else if (obj1[key] != obj2[key]) {
            return false;
        }

    }
    return true;
};


var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    null: null,
    undefined: undefined,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

var cloneObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    null: null,
    undefined: undefined,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};




console.log(deep(initialObj, cloneObj));



