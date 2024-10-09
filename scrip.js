// Seleccionamos los elementos del menú burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

// Agregamos el evento al hacer clic en el menú
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});
