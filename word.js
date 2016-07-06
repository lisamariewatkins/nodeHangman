//checks letters guessed versus random word selected
var letter = require('./letter.js');

var Word = function(wrd){
	this.word = //get word
	this.lets = [];
	this.found = false;
	this.getLets = function(){
		for (var i = 0; i < word.length; i++){
			lets.push(i);
		}
	}
	//returns ture or false whether we found the current word or not
	this.didWeFindTheWord = function() {
		//set the found property to true or false based on whether all the letters have been found or not
		
		//return the found property
	};

	this.checkIfLetterFound = function(guessLetter) {
		//set a variable whatToReturn to 0

		//loop over the lets property and if the letter object's charac property equals the guessletter then set the appear property of the letter object to be true. Also increment whatToReturn.

		//return whatToReturn
	};

	this.wordRender = function() {
		//make a variable named str and set it to empty quotes

		//loop over this.lets and call the letterRender property of the letter object that you're looping over, and add it to str

		//return str
	};
}

//export the Word constructor here at the end
