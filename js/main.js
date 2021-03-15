const body = document.querySelector('body');
const mobileNav = document.querySelector('.header__nav-container');
const hamburgerToggle = document.getElementById('mobile-nav');
const headerNav = document.querySelector('.nav');
const topHeader = document.querySelector('.header');

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

hamburgerToggle.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-close')) {
    document.querySelector('.btn-close').classList.remove('show');
    document.querySelector('.btn-close').classList.add('hide');

    document.querySelector('.btn-open').classList.remove('hide');
    document.querySelector('.btn-open').classList.add('show');

    topHeader.classList.add('open');
    body.classList.remove('no-scroll');
  } else {
    topHeader.classList.remove('open');
    document.querySelector('.btn-close').classList.add('show');
    document.querySelector('.btn-close').classList.remove('hide');
    document.querySelector('.btn-open').classList.add('hide');

    body.classList.add('no-scroll');
  }
});
