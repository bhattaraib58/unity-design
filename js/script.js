document.getElementById("tasks").addEventListener("click", function (event) {
    event.preventDefault()
});

// document.getElementById("task").onmouseover = function () { mouseOver() };
// document.getElementById("task").onmouseout = function () { mouseOut() };

// function mouseOver() {
//     document.getElementById("info").style.display = "block";
// }

// function mouseOut() {
//     document.getElementById("task").style.display = "none";
// }

function playPauseIntroVideo() {
    var introVideo = document.getElementById("introVideo");
    var pausePlayIcon = document.getElementById("pausePlayIcon");
    if (introVideo.paused) {
        pausePlayIcon.src = "images/pause-icon.png";
        introVideo.play();
    }
    else {
        pausePlayIcon.src = "images/video-play.png";
        introVideo.pause();
    }
}