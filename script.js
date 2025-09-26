// Manejo de envío de formulario (simulación)
const formContact = document.getElementById('form-contact');
formContact.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Gracias por tu mensaje, te responderemos pronto.');
  formContact.reset();
});
