// Lesson 3.3 
const nextSlideBtn = document.querySelector("#right-arrow");
const prevSlideBtn = document.querySelector("#left-arrow");

const slides = document.querySelectorAll(".slide");
const indidcator = document.getElementsByClassName("nav-item");
let sliderIndex = 0;

function updateSlider() {
    
    const activeSlide = document.querySelector(".slide.active");
    if (activeSlide) {
        activeSlide.classList.remove("active");
    }
    const currentSlide = slides[sliderIndex];
    currentSlide.classList.add("active");
    const currentImage = currentSlide.style.backgroundImage;
    document.body.style.backgroundImage = currentImage;
    const activeIndicator = [...indidcator].
    filter(indidcator => indidcator.classList.contains("active"))[0];
    if (activeIndicator) {
        activeIndicator.classList.remove("active");
    }
    const currentIndicator = indidcator[sliderIndex];
    currentIndicator.classList.add("active");
};

updateSlider();

nextSlideBtn.addEventListener("click", function () {
    sliderIndex++;
    sliderIndex %= slides.length;
    updateSlider();
})

prevSlideBtn.onclick = () => {
    sliderIndex--;
    sliderIndex = sliderIndex < 0 ? slides.length - 1  : sliderIndex;
    updateSlider();
}

//end