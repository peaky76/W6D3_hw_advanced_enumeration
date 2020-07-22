const AnagramFinder = function (word) {
    this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter( word => this.isAnagram(word) );
};

AnagramFinder.prototype.isAnagram = function (word) {
    if (this.isSameWord(word) || this.isDifferentLength(word)) {
        return false;
    } 
    target_chars = sortedChars(this.word);
    test_chars = sortedChars(word);
    return test_chars.every( (char, index) => char === target_chars[index] );
}

AnagramFinder.prototype.isSameWord = function (word) {
    return this.word === word;
}

AnagramFinder.prototype.isDifferentLength = function (word) {
    return this.word.length != word.length
}

const sortedChars = word => word.toLowerCase().split('').sort();

module.exports = AnagramFinder;
