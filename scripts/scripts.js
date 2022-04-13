let formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault();
    capturaDatos();
})