//checks letters guessed versus random word selected
var letter = require('./letter.js');
var game = require('./game.js');

var Word = function(wrd){
	this.word = game.gameWords.wordBank[Math.floor(Math.random()*wordBank.length)]
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
		if ()
		//return the found property
	};

	this.checkIfLetterFound = function(guessLetter) {
		var whatToReturn = 0;
		for (var i = 0; var i < Word.word.length; i++){
			if (guessLetter === Word.word[i]){
				letter.Letter.appear = true;
				whatToReturn++;
			} 
		}
		return whatToReturn;
	};

	this.wordRender = function() {
		var str = '';
		//loop over this.lets and call the letterRender property of the letter object that you're looping over, and add it to str
		for (var i=0; i < Word.lets.length; i++){
			letter.Letter.letterRender();
		}
		return str;
	};
}

//export the Word constructor here at the end
