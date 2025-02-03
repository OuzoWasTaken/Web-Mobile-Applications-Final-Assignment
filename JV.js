// Switching Between Login & Signup
function showLogin() {
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("loginBtn").classList.add("active");
    document.getElementById("signupBtn").classList.remove("active");
}

function showSignup() {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("signup-form").classList.remove("hidden");
    document.getElementById("signupBtn").classList.add("active");
    document.getElementById("loginBtn").classList.remove("active");
}

function togglePasswordVisibility(passwordId, iconId) {
    var passwordInput = document.getElementById(passwordId);
    var eyeIcon = document.getElementById(iconId);
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}

// Slideshow Gallery
let gallerySlideIndexes = [1, 1, 1]; 
const gallerySlideClasses = ["food-slider", "interior-slider", "reviews-slider"];

function plusGallerySlides(n, no) {
    showGallerySlides(gallerySlideIndexes[no] += n, no);
}

function showGallerySlides(n, no) {
    let slides = document.querySelectorAll(`#${gallerySlideClasses[no]} .mySlides`);

    if (slides.length === 0) return; 

    if (n > slides.length) gallerySlideIndexes[no] = 1;
    if (n < 1) gallerySlideIndexes[no] = slides.length;

    slides.forEach(slide => slide.style.display = "none"); 
    slides[gallerySlideIndexes[no] - 1].style.display = "block"; 
}

document.addEventListener("DOMContentLoaded", function () {
    gallerySlideClasses.forEach((_, i) => showGallerySlides(1, i));
});

// Slideshow Blog
let blogSlideIndexes = [1, 1, 1]; 
const blogSlideClasses = ["articles-slider", "recipes-slider", "events-slider"];

function plusBlogSlides(n, no) {
    showBlogSlides(blogSlideIndexes[no] += n, no);
}

function showBlogSlides(n, no) {
    let slides = document.querySelectorAll(`#${blogSlideClasses[no]} .mySlides`);

    if (slides.length === 0) return;

    if (n > slides.length) blogSlideIndexes[no] = 1;
    if (n < 1) blogSlideIndexes[no] = slides.length;

    slides.forEach(slide => slide.style.display = "none");
    slides[blogSlideIndexes[no] - 1].style.display = "block"; 
}

document.addEventListener("DOMContentLoaded", function () {
    blogSlideClasses.forEach((_, i) => showBlogSlides(1, i));
});