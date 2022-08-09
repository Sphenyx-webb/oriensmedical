var vid = document.getElementById("vid");
var vidCover = document.getElementById("vid-cover");
var playBtn = document.querySelector(".fa-play");

playBtn.addEventListener("click", () => {
    vidCover.classList.remove("z-10")
    vid.play()
    vid.setAttribute("controls", true);
})


