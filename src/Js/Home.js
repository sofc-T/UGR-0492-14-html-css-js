document.addEventListener("DOMContentLoaded", function() {
    const slideshowContainer = document.getElementById('slideshowContainer');
    const slides = document.querySelectorAll('#slideshowContainer img');
    const totalSlides = slides.length;
    const cloneSlides = Array.from(slides).map(slide => slide.cloneNode(true));

    
    cloneSlides.forEach(cloneSlide => {
        slideshowContainer.appendChild(cloneSlide);
    });

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 2) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 2 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    document.getElementById('cont1').addEventListener('click', prevSlide);
    document.getElementById('cont2').addEventListener('click', nextSlide);

    
    setInterval(nextSlide, 3000);
});
document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menu');
    var navLinks = document.querySelector('nav ul');

    menuButton.addEventListener('click', function() {
        if (navLinks.style.display === 'none' || navLinks.style.display === '') {
            navLinks.style.display = 'block';
        } else {
            navLinks.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        var target = event.target;
        if (target !== menuButton && !navLinks.contains(target)) {
            navLinks.style.display = 'none';
        }
    });
});