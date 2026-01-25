const revealElements = document.querySelectorAll(".scroll-reveal");
const parallaxItems = document.querySelectorAll("[data-parallax]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const handleParallax = () => {
  const scrollY = window.scrollY;
  parallaxItems.forEach((item) => {
    const speed = Number(item.dataset.parallax) || 0.1;
    item.style.transform = `translateY(${scrollY * speed}px)`;
  });
};

window.addEventListener("scroll", handleParallax);
window.addEventListener("load", handleParallax);
