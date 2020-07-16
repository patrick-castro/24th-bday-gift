const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false; // Auto scroll
const intervalTime = 5000;
let counter = 1;
let slideInterval;

const nextSlide = () => {
  let current = '';
  counter++;

  if (document.querySelector('.current')) {
    current = document.querySelector('.current');
    current.classList.remove('current');
  } else {
    current = document.querySelector('.current-2');
    current.classList.remove('current-2');
  }

  if (current.nextElementSibling) {
    if (
      counter === 2 ||
      counter === 3 ||
      counter === 4 ||
      counter === 6 ||
      counter === 14 ||
      counter === 18 ||
      counter === 19 ||
      counter === 21 ||
      counter === 22 ||
      counter === 23 ||
      counter === 24
    ) {
      current.nextElementSibling.classList.add('current-2');
    } else {
      current.nextElementSibling.classList.add('current');
    }
  } else {
    slides[0].classList.add('current');
    counter = 1;
  }

  setTimeout(() => {
    if (document.querySelector('.current')) {
      return current.classList.remove('current');
    } else {
      return current.classList.remove('current-2');
    }
  });

  console.log(counter);
};

const prevSlide = () => {
  let current = '';
  counter = counter - 1 === 0 ? 24 : --counter;

  if (document.querySelector('.current')) {
    current = document.querySelector('.current');
    current.classList.remove('current');
  } else {
    current = document.querySelector('.current-2');
    current.classList.remove('current-2');
  }

  if (current.previousElementSibling) {
    if (
      counter === 2 ||
      counter === 3 ||
      counter === 4 ||
      counter === 6 ||
      counter === 14 ||
      counter === 18 ||
      counter === 19 ||
      counter === 21 ||
      counter === 22 ||
      counter === 23 ||
      counter === 24
    ) {
      current.previousElementSibling.classList.add('current-2');
    } else {
      current.previousElementSibling.classList.add('current');
    }
  } else {
    if (counter === 24) {
      slides[slides.length - 1].classList.add('current-2');
    } else {
      slides[slides.length - 1].classList.add('current');
      counter = 24;
    }
  }

  setTimeout(() => {
    if (document.querySelector('.current')) {
      return current.classList.remove('current');
    } else {
      return current.classList.remove('current-2');
    }
  });

  console.log(counter);
};

// Button events
next.addEventListener('click', (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
