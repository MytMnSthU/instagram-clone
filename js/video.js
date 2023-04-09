const playbtns = document.querySelectorAll(".btn-play");
playbtns.forEach((playbtn) => {
    let isPlay = false;
    playbtn.addEventListener("click", (e) => {
        const video = e.target.previousElementSibling;
        const playicon = playbtn.querySelector(".bi");

        if (!isPlay) {
            video.play();
            playicon.className = "bi bi-pause";
        } else {
            video.pause();
            playicon.className = "bi bi-play-fill";
        }

        isPlay = !isPlay;
    });
});
