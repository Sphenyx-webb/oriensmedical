var introVid = document.getElementById("intro-vid");
var vidCover = document.getElementById("vid-cover");
var playBtn = document.querySelector(".fa-play");

playBtn.addEventListener("click", () => {
    vidCover.classList.remove("z-10")
    introVid.play()
    introVid.setAttribute("controls", true);
})


