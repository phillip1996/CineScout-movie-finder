document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelector(".testimonial-container");
  let index = 0;

  function slideTestimonials() {
    index++;
    if (index > 3) index = 0; // Reset to first slide after last one
    testimonials.style.transform = `translateX(-${index * 33.33}%)`;
  }

  setInterval(slideTestimonials, 3000); // Change every 3 seconds
});
