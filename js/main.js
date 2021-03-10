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
  console.log('click');
  console.log(hamburgerToggle.className);
  console.log(e.target.className);
  if (e.target.classList.contains('btn-close')) {
    console.log('here');
    // hamburgerToggle.className = 'fas fa-times mobile-nav elevate-element open';
    // mobileNav.classList.add('show-mobile-nav');
    document.querySelector('.btn-close').classList.remove('show');
    document.querySelector('.btn-close').classList.add('hide');

    document.querySelector('.btn-open').classList.remove('hide');
    document.querySelector('.btn-open').classList.add('show');
    // headerNav.classList.remove('opened');
    topHeader.classList.add('open');
    body.classList.remove('no-scroll');
  } else {
    topHeader.classList.remove('open');
    document.querySelector('.btn-close').classList.add('show');
    document.querySelector('.btn-close').classList.remove('hide');
    document.querySelector('.btn-open').classList.add('hide');
    // headerNav.classList.add('opened');
    // hamburgerToggle.className = 'fas fa-bars mobile-nav';
    // mobileNav.classList.remove('show-mobile-nav');

    body.classList.add('no-scroll');
  }
});
