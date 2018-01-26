//contains a constructor, word, that depends on letter constructor.
//used to create an object representing the current word the 
//the user is attempting to guess. constructor should define:
        
    //function that takes a character as an argument and calls the guess function on each letter object
        //(second function defined in letter.js)
var Letter = require("./letter.js");

var Word = function (currentWord) {
    this.lettersArray = []; 

    for(var i = 0; i < currentWord.length; i++) {
        var currentLetter = currentWord[i];

        var letterObject = new Letter(currentLetter);
        this.lettersArray.push(letterObject);

    }

    this.toString = function () {

    }




    //array of newLetter object representing the letters of underlying word
    //function that returns string representing the word.
        //should call function on each letter object(function defined in letter.js)
        //displays the character or an underscore and concantenate those
}
 