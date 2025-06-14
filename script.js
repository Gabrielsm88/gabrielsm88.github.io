// Typing effect com som
const text = "Técnico de Redes";
const target = document.getElementById("typing-text");
let index = 0;

// Carrega o som de digitação
const typeSound = new Audio("sounds/type.mp3");
typeSound.volume = 0.4;

function type() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    
    // Toca o som se o caractere não for espaço
    if (text.charAt(index) !== " ") {
      // Reinicia o som do começo
      typeSound.currentTime = 0;
      typeSound.play().catch(() => {});
    }

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
