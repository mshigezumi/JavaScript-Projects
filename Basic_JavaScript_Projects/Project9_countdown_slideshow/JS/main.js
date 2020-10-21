// TIMER
function countdown() {
    var seconds = document.getElementById("seconds").value; // Set seconds to the number specified in index.html

    function tick() {
        seconds--;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000); // Wait for 1000ms (1s)
        if (seconds == -1) {
            alert("time's up!"); // When seconds hits 0 pops an alert up
        }
    }
    tick();
}

// SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex); // Not entirely sure why this doesn't display the first image by default

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n); // Increases the slideIndex by the specified amount
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n); // Sets the slideIndex to the specified number
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides"); // Setting slides from index.html to the variable slides
    var dots = document.getElementsByClassName("dot"); // Setting dots from index.html to the variable dots
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length} // Keeping slideIndex within the approprate range
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Go through slides and set their display to none (hidding them)
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Go through dots and get rid of the " active"
    }
    slides[slideIndex-1].style.display = "block"; // Set the slide to be shown
    dots[slideIndex-1].className += " active"; // Set the dot to be active
}