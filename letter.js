var Letter = function (char) {
    this.letter = char;
    this.guessed = false;

    this.toString = function() {
        if(this.guessed) {
            return this.letter;
        } else {
            return "_";
        }
    }

    this.guess = function (letterToGuess) {
        if(letterToGuess === this.letter) {
            this.guessed = true;
        }
    }
    
    //string value to store underlying character
    //boolean that stores whether letter has been guessed
    //function that returns underlying character if it has been guessed
        //like an underscore
    //function that takes a character as an argument and checks it
    // against the underlying character, updating stored boolean to true if
    //guessed correctly
};

// var a = new letter("a");
// console.log(a);
// console.log(a.toString());
// a.guess("b");
// console.log(a.toString());

module.exports = Letter;