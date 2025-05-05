/* ---- NAVIGATION ---- */

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

/* ACTIVE PAGE (NAVIGATION) */
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

/* ---- POP-UP CONTACTFORM ---- */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();

  console.log('Formularen er blevet forhindret i at blive sendt normalt.');

  const formData = new FormData(e.target);

  const request = new XMLHttpRequest();
  request.open('POST', 'mail.php', true);

  request.onload = () => {
    console.log('Anmodningen blev afsluttet. Status:', request.status);

    if (request.status === 200) {
      document.getElementById("myModal").style.display = "block";
      history.pushState(null, '', window.location.href);

    } else {
      alert('Der opstod en fejl under afsendelsen.');
    }
  };

  request.onerror = () => {
    console.log('Der opstod en fejl under anmodningen');
  };

  request.send(formData);
});

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById("myModal").style.display = "none";
});
