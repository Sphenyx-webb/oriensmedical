const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
      backToTop.classList.remove("hidden");
    } else {
      backToTop.classList.add("hidden");
    }
  })

  backToTop.addEventListener("click", () => {
    window.scrollTo(0, 0)
  })