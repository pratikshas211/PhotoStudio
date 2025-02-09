// script.js
document.addEventListener("DOMContentLoaded", function() {
    var mainVideo = document.getElementById("mainVideo");
    var floatingVideo = document.getElementById("floatingVideo");
    var floatingVideoPlayer = document.getElementById("floatingVideoPlayer");

    mainVideo.addEventListener("click", function() {
        // Pause the main video and show the floating video player
        mainVideo.pause();
        floatingVideo.style.display = "block";
        floatingVideoPlayer.play();
    });

    floatingVideoPlayer.addEventListener("ended", function() {
        // Hide the floating video player when the video ends
        floatingVideo.style.display = "none";
    });

    // Add event listener to hide floating video when user clicks outside of it
    document.addEventListener("click", function(event) {
        if (!floatingVideo.contains(event.target) && !mainVideo.contains(event.target)) {
            floatingVideo.style.display = "none";
            floatingVideoPlayer.pause();
        }
    });
});
