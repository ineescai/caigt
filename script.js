const menuButton = document.querySelector('.menu-button');
const mainMenu = document.querySelector('.main-menu');

menuButton?.addEventListener('click', () => {
  const isOpen = mainMenu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

mainMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainMenu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});
