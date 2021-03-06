const slides = document.getElementsByClassName("carousel-item")
const carouselBtnPrev = document.getElementById("carousel-btn-prev")
const carouselBtnNext = document.getElementById("carousel-btn-next")
let slidePosition = 0
const totalSlides = slides.length

carouselBtnPrev.addEventListener("click", moveToPrevSlide)
carouselBtnNext.addEventListener("click", moveToNextSlide)

function hideAllSlides() {
  for (let slide of slides) {
  slide.classList.remove("carousel-item-visible")
  slide.classList.add("carousel-item-hidden")
  }
}

function moveToNextSlide() {
  hideAllSlides()

  if(slidePosition === totalSlides - 1) {
    slidePosition = 0
  } else {
    slidePosition++
  }

  slides[slidePosition].classList.add("carousel-item-visible")
}

function moveToPrevSlide() {
  hideAllSlides()

  if(slidePosition === 0) {
    slidePosition = totalSlides - 1
  } else {
    slidePosition--
  }
  
  slides[slidePosition].classList.add("carousel-item-visible")
}

