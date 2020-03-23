function Cat(name) {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.name = name;

    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
    };
}

var barsik = new Cat('Барсик');

console.log(barsik.name);
console.log(barsik.feed());

barsik = null;
