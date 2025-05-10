// Efecto sorpresa (modal + corazones)
document.getElementById('surpriseBtn').addEventListener('click', function() {
  // Mostrar modal
  const modal = new bootstrap.Modal(document.getElementById('surpriseModal'));
  modal.show();
  
  // Efecto de corazones (opcional)
  const createHeart = () => {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    heart.style.color = ['#ff85a2', '#ffd6e0', '#c81d75', '#ffeb3b', '#ffffff'][Math.floor(Math.random() * 5)];
    heart.style.animation = `float-up ${Math.random() * 2 + 2}s ease-in forwards`;
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 3000);
  };

  // Crear 30 corazones
  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 100);
  }
});

// Añade este estilo para los corazones flotantes
const style = document.createElement('style');
style.innerHTML = `
  @keyframes float-up {
    to {
      opacity: 0;
      transform: translateY(-${Math.random() * 200 + 100}px) rotate(${Math.random() * 360}deg);
    }
  }
  .modal-content {
    background: linear-gradient(135deg, #ff85a2, #c81d75) !important;
    border-radius: 20px !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
  }
`;
document.head.appendChild(style);