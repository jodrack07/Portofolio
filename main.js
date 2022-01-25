const hamburger = document.querySelector('.hamburger');

const menuLinks = document.querySelector('.menu__links');

// adding the class active when clicking to the hambuger and menuLinks elements

hamburger.addEventListener('click', () => {
  document.querySelectorAll('.bar').forEach((bar) => {
    if (bar.style.backgroundColor === 'white') {
      bar.style.backgroundColor = '#6070ff';
    } else {
      bar.style.backgroundColor = 'white';
    }
  });

  hamburger.classList.toggle('active');
  menuLinks.classList.toggle('active');
  document.querySelector('.main').classList.toggle('blur');
});

// removing the class when clicking to the menu__links-item element

document.querySelectorAll('.links').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menuLinks.classList.remove('active');
    document.querySelector('.main').classList.toggle('blur');
  });
});
