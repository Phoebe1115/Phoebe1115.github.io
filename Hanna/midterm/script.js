document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href'); 
        const targetSection = document.querySelector(targetId); 

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); 
        }
    });
});


window.addEventListener('load', function() {
    if (window.location.hash) {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});


let currentEventSlide = 0; 

function changeEventPage(direction) {
    const eventSlides = document.querySelectorAll('.event-slide');
    eventSlides[currentEventSlide].classList.remove('active'); 
    currentEventSlide += direction;

    if (currentEventSlide < 0) {
        currentEventSlide = eventSlides.length - 1; 
    } else if (currentEventSlide >= eventSlides.length) {
        currentEventSlide = 0; 
    }

    eventSlides[currentEventSlide].classList.add('active'); 
}

let currentSlide = 0; 

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    slides[currentSlide].style.display = 'none'; 
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1; 
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; 
    }

    slides[currentSlide].style.display = 'block'; 
}


document.addEventListener('DOMContentLoaded', () => {
    const eventSlides = document.querySelectorAll('.event-slide');
    eventSlides.forEach((slide, index) => {
        slide.classList.toggle('active', index === 0); 
    });

    const slides = document.querySelectorAll('.carousel-images img');
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'block' : 'none'; 
    });
});