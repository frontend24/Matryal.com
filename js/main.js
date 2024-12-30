// The Product Script Slider
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('mtrProductSlider');
    const prevButton = document.getElementById('mtrprevButtonProduct');
    const nextButton = document.getElementById('mtrnextButtonProduct');

    const items = document.querySelectorAll('#mtrProductSlider .mtr-product-slider-img');
    let currentIndex = 0; // Start from the left-most item

    function updateButtons() {
        // Disable the prev button if at the start (left-most)
        if (currentIndex === 0) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

        // Disable the next button if at the end (right-most)
        if (currentIndex === items.length) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }

    function moveSlider() {
        // Move the slider by adjusting the transform property
        slider.style.transform = `translateX(${currentIndex * 70}px)`; // 170px is the width of each item with some margin
    }

    // Next Button Functionality
    nextButton.addEventListener('click', function () {
        if (currentIndex < items.length - 1) {  // Move to the right (next)
            currentIndex++;
            moveSlider();
            updateButtons();
        }
    });

    // Prev Button Functionality
    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {  // Move to the left (previous)
            currentIndex--;
            moveSlider();
            updateButtons();
        }
    });

    // Initial Setup
    moveSlider();
    updateButtons();
});
// The Season Script Slider
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('mtrSeasonSlider');
    const prevButton = document.getElementById('mtrprevButtonSeason');
    const nextButton = document.getElementById('mtrnextButtonSeason');

    const items = document.querySelectorAll('#mtrSeasonSlider .mtr-product-slider-img');
    console.log(items)
    let currentIndex = 0; // Start from the left-most item

    function updateButtons() {
        // Disable the prev button if at the start (left-most)
        if (currentIndex === 0) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

        // Disable the next button if at the end (right-most)
        if (currentIndex === items.length) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }

    function moveSlider() {
        // Move the slider by adjusting the transform property
        slider.style.transform = `translateX(${currentIndex * 110}px)`; // 170px is the width of each item with some margin
    }

    // Next Button Functionality
    nextButton.addEventListener('click', function () {
        if (currentIndex < items.length - 1) {  // Move to the right (next)
            currentIndex++;
            moveSlider();
            updateButtons();
        }
    });

    // Prev Button Functionality
    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {  // Move to the left (previous)
            currentIndex--;
            moveSlider();
            updateButtons();
        }
    });

    // Initial Setup
    moveSlider();
    updateButtons();
});
// The Power Script Slider
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('mtrPowerSlider');
    const prevButton = document.getElementById('mtrprevButtonPower');
    const nextButton = document.getElementById('mtrnextButtonPower');

    const items = document.querySelectorAll('#mtrPowerSlider .mtr-product-slider-img');
    console.log(items)
    let currentIndex = 0; // Start from the left-most item

    function updateButtons() {
        // Disable the prev button if at the start (left-most)
        if (currentIndex === 0) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

        // Disable the next button if at the end (right-most)
        if (currentIndex === items.length) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }

    function moveSlider() {
        // Move the slider by adjusting the transform property
        slider.style.transform = `translateX(${currentIndex * 110}px)`; // 170px is the width of each item with some margin
    }

    // Next Button Functionality
    nextButton.addEventListener('click', function () {
        if (currentIndex < items.length - 1) {  // Move to the right (next)
            currentIndex++;
            moveSlider();
            updateButtons();
        }
    });

    // Prev Button Functionality
    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {  // Move to the left (previous)
            currentIndex--;
            moveSlider();
            updateButtons();
        }
    });

    // Initial Setup
    moveSlider();
    updateButtons();
});


// الحصول على العناصر
const section = document.getElementById('mtrTopNavDropDown');
const toggleButton = document.getElementById('mtrTopNavDropDownButton');
const overlay = document.getElementById('overlay');

// وظيفة لفتح أو إغلاق السكشن
toggleButton.addEventListener('click', function (event) {
    // منع التفاعل مع النقر من الزر نفسه
    event.stopPropagation();
    const isVisible = section.style.display === 'block';
    if (isVisible) {
        section.classList.add('d-none');
        overlay.style.display = 'none';
    } else {
        section.classList.remove('d-none');
        overlay.style.display = 'block';
    }
});

// إغلاق السكشن عند النقر في أي مكان آخر
document.addEventListener('click', function (event) {
    if (!section.contains(event.target) && event.target !== toggleButton) {
        section.classList.add('d-none');
        overlay.style.display = 'none';
    }
});
