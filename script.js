// Typing effect
const text = "Técnico de Redes";
const target = document.getElementById("typing-text");
let index = 0;

function type() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
  } else {
    clearInterval(typingInterval);
  }
}

const typingInterval = setInterval(type, 100);

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target); // Aplica só uma vez
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.hidden').forEach(el => {
  observer.observe(el);
});
