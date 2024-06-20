document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;

    function showSlide(n) {
        const slides = document.getElementsByClassName("slide");
        slideIndex = (n + slides.length) % slides.length;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }
    
    function prevSlide() {
        showSlide(slideIndex - 1);
    }
    
    function nextSlide() {
        showSlide(slideIndex + 1);
    }
    
    // Initialize the slideshow
    showSlide(slideIndex);

    // Attach functions to the window object to make them accessible in the HTML
    window.prevSlide = prevSlide;
    window.nextSlide = nextSlide;
});
