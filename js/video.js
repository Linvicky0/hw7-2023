var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementsByClassName("video")[0];
	video.autoplay = false;
	video.load();

});
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

});

document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
   console.log(video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1;
   console.log(video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 10;
   console.log(video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
       document.querySelector("#mute").innerHTML = "mute";
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";

	}
});
document.querySelector("#slider").oninput =  function() {
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = video.volume;

};

document.querySelector("#vintage").addEventListener("click", function(){
	video.setAttribute('class', 'oldSchool');
});
document.querySelector("#orig").addEventListener("click", function(){
	video.setAttribute('class', 'video');
});

