const menuBtn = document.querySelector('.mobile-menu');
const menuOverlay = document.querySelector('.overlay-wrap');
const closeMobileMenu = document.querySelector('.cancel-wrap');
const itemMobileMenu = document.querySelectorAll('.item-menu');

menuBtn.addEventListener('click', () => {
  menuOverlay.style.display = 'block';
});

closeMobileMenu.addEventListener('click', () => {
  menuOverlay.style.display = 'none';
});

itemMobileMenu.forEach((element) => {
  element.addEventListener('click', () => {
    menuOverlay.style.display = 'none';
  });
});