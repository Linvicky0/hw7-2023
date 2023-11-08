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
	document.querySelector("#volume").textContent = Math.round(video.volume * 100)+ "%";

});

document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
   console.log(video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.1;
   console.log(video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		video.currenTime = 0
		console.log("Going back to the start")
	}
	else {
	video.currentTime += 10;
	}
	console.log(video.currentTime);

});
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
       document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";

	}
});
document.querySelector("#slider").oninput =  function() {
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = this.value + "%";

};

document.querySelector("#vintage").addEventListener("click", function(){
	video.setAttribute('class', 'oldSchool');
});
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove('oldSchool');

});

