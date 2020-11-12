function openForm() {
    document.getElementById("Form").style.display = "block";
}

function closeForm() {
    document.getElementById("Form").style.display = "none";
}

function showSlides(n) {
    var slides = document.getElementsByClassName("Slide");
    var number = document.getElementsByClassName("Slide_Number")
    var dots = document.getElementsByClassName("Dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < number.length; i++) {
        number[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    number[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function plusSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

var slideIndex = 1;
showSlides(slideIndex);