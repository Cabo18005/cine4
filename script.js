const envelope = document.getElementById('envelope');
const sealButton = document.getElementById('sealButton');

// Abrir sobre al acercar el mouse
envelope.addEventListener('mouseenter', function() {
    envelope.classList.add('open');
});

// Cerrar sobre al alejar el mouse
envelope.addEventListener('mouseleave', function() {
    envelope.classList.remove('open');
});

// Abrir sobre al hacer clic en el sello
sealButton.addEventListener('click', function() {
    envelope.classList.toggle('open');
});

document.getElementById('rsvpButton').addEventListener('click', function() {
    alert('¡Gracias por confirmar tu asistencia!');
});

document.getElementById('trailerButton').addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=trailer_link', '_blank');
});
