window.addEventListener("DOMContentLoaded", () => {
  // Fade in effect
  document.body.classList.add("fade-in");

  // Image animation
  const imgs = document.querySelectorAll(".animated-img");
  imgs.forEach(img => {
    setTimeout(() => {
      img.classList.add("show");
    }, 500);
  });
});

// Animasi saat scroll untuk elemen dengan class "project" atau gambar
function revealOnScroll() {
  const elements = document.querySelectorAll('.animated-img, .project');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("DOMContentLoaded", revealOnScroll);

