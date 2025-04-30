/* ---- Navigation ---- */

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const dropdowns = document.querySelectorAll('.dropdown');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault(); 
      this.classList.toggle('open');
    }
  });
});

/* Aktiv side */
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  const linkPage = link.getAttribute('href');

  if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});


