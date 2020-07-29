(function(window) {
	var byespeaker = {};
var speakword = "good bye";
byespeaker.speak = function (name) {
	// body...
	console.log(speakword + " " + name)
}
window.byespeaker=byespeaker;
})(window)