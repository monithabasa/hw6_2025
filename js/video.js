var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	// turn off autoplay
	video.autoplay = false;
	console.log("Auto Play is set to " + video.autoplay);
	// turn off looping 
	video.loop = false;
	console.log("Loop is set to " + video.loop);
	video.load();
});

// play button
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML =  video.volume*100 + "%";
	console.log("Play Video");
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

// slow down button
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New playback rate is " + video.playbackRate + " after slowing down");
});

// speed up button
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New playback rate is " + video.playbackRate + " after speeding up");
});

// skip ahead button
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
	} 
	else {
		video.currentTime += 10;
	}
	console.log("Current location is " + video.currentTime);
});

// mute button
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});


// volume
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.querySelector("#slider").value / 100; 
	document.querySelector("#volume").innerHTML =  video.volume*100 + "%";
});

// styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

