// task 1

function Person(name,age) {
    var personAge = age;
    this.name = name;

    self = this;
   

    function getFormattedAge() {
        return personAge + ' лет';
    }

    this.showInfo = function() {
        console.log('Привет, мне зовут ' + self.name + ', мне ' + getFormattedAge()+'.');
    };
    
}

function Employee(name,age,salary) {

    Person.apply(this,arguments);

    this.salary = salary;

    var parentShowInfo = this.showInfo;

    this.showInfo = function() {
        parentShowInfo();
        console.log('Моя зарплата ' + this.salary + '$.');
    };
}


// task 2

function Person(name,age) {
    this._personAge = age;
    this.name = name;
}

Person.prototype._getFormattedAge = function() {
    return this._personAge + ' лет';
};

Person.prototype.showInfo = function() {
    console.log('Привет, мне зовут ' + this.name + ', мне ' + this._getFormattedAge()+'.');
};

function Employee(name,age,salary) {
    this.salary = salary;

    Person.apply(this, arguments);
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.showInfo = function() {
    Person.prototype.showInfo.apply(this, arguments);

    console.log('Моя зарплата ' + this.salary + '$.');
};


var employee = new Employee('Tema',26,'2000');

employee.showInfo();




