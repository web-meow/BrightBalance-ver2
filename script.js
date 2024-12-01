document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    let intervalId;

    // Функция для изменения слайдов
    function changeSlide(index) {
        slidesContainer.style.transform = `translateX(${-index * 100}%)`;

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', index === i);
        })

        currentIndex = index;
    }

    // Автоматическая смена слайдов
    function startSlider() {
        intervalId = setInterval(() => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= slides.length) {
                nextIndex = 0;
            }
            changeSlide(nextIndex);
        }, 3000); // Время анимации между слайдами (в миллисекундах)
    }

    // Переключаем слайды вручную по клику на индикатор
    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            clearInterval(intervalId);
            changeSlide(i);
            startSlider();
        });
    });

    // Начинаем автоматическую смену слайдов
    startSlider();
});