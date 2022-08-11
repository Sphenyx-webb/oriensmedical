const homeVid = document.querySelector("#homeVideo");
const homeVidCover = document.querySelector("#homeVideoCover");
const playBtn = document.querySelector(".fa-play");

//home video control script
if(homeVid && homeVidCover && playBtn){
    playBtn.addEventListener("click", () => {
        homeVidCover.classList.remove("z-10")
        homeVid.play()
        homeVid.setAttribute("controls", true);
    });
}

// about video control script
const aboutVid = document.querySelector("#aboutVideo");
const aboutVidCover = document.querySelector("#aboutVideoCover");
if(aboutVid && aboutVidCover && playBtn){
    playBtn.addEventListener("click", () => {
        aboutVidCover.classList.remove("z-10");
    });
}