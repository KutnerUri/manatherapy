const slides = Array.from(document.querySelectorAll<HTMLElement>(".slide"));

const setActive = (entry: IntersectionObserverEntry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add("is-active");
  } else {
    entry.target.classList.remove("is-active");
  }
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(setActive);
  },
  {
    threshold: 0.55,
  }
);

slides.forEach((slide) => observer.observe(slide));
