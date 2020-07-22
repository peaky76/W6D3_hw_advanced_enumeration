const IsogramFinder = function (word) {
    this.chars = word.split('');
};

IsogramFinder.prototype.isIsogram = function() {
    return this.chars.length === this.getUniqueLetters().length;
};

IsogramFinder.prototype.getUniqueLetters = function() {
    const reducer = function(uniques, letter) {
        if (!uniques.includes(letter)) {
            uniques.push(letter);
        };
        return uniques;
    };
    return this.chars.reduce(reducer, []);
};

module.exports = IsogramFinder;
