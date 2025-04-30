const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const dropdowns = document.querySelectorAll('.dropdown');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Dropdowns (mobil)
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      this.classList.toggle('open');
    }
  });
});