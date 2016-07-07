//controls whether a letter or dash appears on the screen
var Letter = function(let){
	this.charac = "_";
	this.appear = false;
	this.letterRender = function(){
		Letter.charac = guessLetter;
	}
}