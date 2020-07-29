(function(window) {
	var hellospeaker = {};
var speakword = "hello";
hellospeaker.speak = function (name) {
	// body...
	console.log(speakword + " " + name)
}
window.hellospeaker=hellospeaker;
})(window)