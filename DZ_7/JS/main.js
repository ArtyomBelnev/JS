function Animal(name) {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this.name = name;

    this.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };
}

function Cat(name) {
    var self = this;

    Animal.apply(this,arguments);

    var animalFeed = self.feed;
    self.feed = function() {
        animalFeed.call(self);
        console.log('Кот доволен ^_^');
        return self;
    };

    self.stroke = function() {
        console.log('Гладим кота.');
        return self;
    };
}

var tom = new Cat('Tom');

console.log(tom.name);

tom.dailyNorm(250);
tom.feed().stroke();

tom = null;

