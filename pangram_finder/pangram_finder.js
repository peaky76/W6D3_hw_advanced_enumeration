const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase_chars = phrase.toLowerCase().split(''); 
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every( letter => this.phrase_chars.includes(letter) );
}

module.exports = PangramFinder;
