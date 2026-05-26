const menuMobile = document.getElementById('menu-mobile');
const menu = document.getElementById('menu');

menuMobile.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const links = document.querySelectorAll('.menu a');

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50) {
    navbar.style.background = '#111';
  } else {
    navbar.style.background = 'rgba(0,0,0,0.7)';
  }
});