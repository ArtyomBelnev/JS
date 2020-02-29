function Cat() {
    var foodAmount = 50;
    
    function formatFoodAmount() {
        return foodAmount + ' гр';
    }

    this.feed = function() {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма');
    };
}

var cat = new Cat();
cat.feed();

\\