document.querySelectorAll(".carousel").forEach(carousel => {

    const carouselParent = "#" + carousel.getAttribute("id");

    const carouselInner  =  carousel.querySelector(`${carouselParent} .carousel-inner`);
    const prevBtn = document.querySelector(`${carouselParent} .carousel-control-btn-prev`);
    const nextBtn = document.querySelector(`${carouselParent} .carousel-control-btn-next`);

    prevBtn.addEventListener("click", (e) => {
        scrollCarousel(e, -1);
    });

    nextBtn.addEventListener("click", (e) => {
        scrollCarousel(e, 1);
    });

    function scrollCarousel(e, scroll){
        e.preventDefault();
        const carouselWidth = carouselInner.clientWidth;
        if(scroll === 1){
            carouselInner.scrollLeft += carouselWidth;
        } else {
            carouselInner.scrollLeft -= carouselWidth;
        }

    }

});