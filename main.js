const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.menu__links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menuLinks.classList.toggle('active');
});
