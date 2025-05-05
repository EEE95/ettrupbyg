const testimonials = [
  {
    quote: "Vi havde brug for hjælp til nogle mindre reparationer i køkken og bryggers. Selvom det ikke var et stort projekt, fik vi samme gode behandling og kvalitet som ved større opgaver. Thomas er grundig og meget behagelig at samarbejde med",
    author: "– Lene, Fredericia",
    stars: 5
  },
  {
    quote: "Hurtigt, professionelt og til en god pris. Kan varmt anbefales!",
    author: "– Peter N., Pjedsted",
    stars: 4.5
  },
  {
    quote: "Vi fik renoveret vores gamle badeværelse, og Thomas leverede et super flot resultat – helt som aftalt. Han var nem at få fat på, lyttede til vores ønsker og gav god rådgivning undervejs.",
    author: "– Mette & Jonas, Vejle",
    stars: 5
  }
];

let currentIndex = 0;

function createStars(count) {
  const fullStars = Math.floor(count);
  const halfStar = count % 1 !== 0;
  let starsHTML = "";
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fa-solid fa-star"></i>';
  }
  if (halfStar) {
    starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
  }
  return starsHTML;
}

function showTestimonial(index) {
  const testimonial = testimonials[index];
  const container = document.getElementById("testimonial-slider");

  container.innerHTML = `
    <div class="testimonial-card">
      <p class="quote">“${testimonial.quote}”</p>
      <div class="stars">${createStars(testimonial.stars)}</div>
      <p class="author">${testimonial.author}</p>
    </div>
    <div class="nav-buttons">
      <button id="prevBtn"><i class="fa-solid fa-chevron-left"></i></button>
      <button id="nextBtn"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
  `;

  document.getElementById('nextBtn').addEventListener('click', nextTestimonial);
  document.getElementById('prevBtn').addEventListener('click', prevTestimonial);
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

window.onload = () => {
  showTestimonial(currentIndex);
  setInterval(nextTestimonial, 10000);
};