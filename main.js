const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click', () => {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
  document.querySelector('.main').classList.add('blur');
  document.querySelector('.logo').classList.add('blur');
  openMenu.classList.add('blur');
})

closeMenu.addEventListener('click', () => {
  mainMenu.style.top = '-100%';
  document.querySelector('.main').classList.remove('blur');
  document.querySelector('.logo').classList.remove('blur');
  openMenu.classList.remove('blur')
})

document.querySelectorAll('.links').forEach(link => {
  link.addEventListener('click', () => {
  mainMenu.style.display = 'none';
  document.querySelector('.main').classList.remove('blur');
  document.querySelector('.logo').classList.remove('blur');
  openMenu.classList.remove('blur')
  })
})
