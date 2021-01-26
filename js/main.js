const body = document.querySelector('body');
const mobileNav = document.querySelector('.header__nav-container');
const hamburgerToggle = document.getElementById('mobile-nav');

let slideIndex = 1;
document.querySelector('.prev').addEventListener('click', () => plusDivs(-1));
document.querySelector('.next').addEventListener('click', () => plusDivs(1));

showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let i;
  const slides = document.getElementsByClassName('slide');
  const imageSlides = document.getElementsByClassName('image-slide');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    imageSlides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
  imageSlides[slideIndex - 1].style.display = 'block';
}

hamburgerToggle.addEventListener('click', () => {
  console.log('click');
  if (hamburgerToggle.className === 'fas fa-bars mobile-nav') {
    hamburgerToggle.className = 'fas fa-times mobile-nav elevate-element';
    mobileNav.classList.add('show-mobile-nav');
    body.classList.add('no-scroll');
  } else {
    hamburgerToggle.className = 'fas fa-bars mobile-nav';
    mobileNav.classList.remove('show-mobile-nav');
    body.classList.remove('no-scroll');
  }
});
