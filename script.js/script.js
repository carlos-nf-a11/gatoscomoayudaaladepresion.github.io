// En este caso, no se requiere interactividad compleja, pero si quisieras agregarla, este sería el lugar.
// Por ejemplo, puedes añadir un efecto de cambio de imagen al hacer clic sobre ellas o un mensaje.

document.querySelectorAll('.foto img').forEach(image => {
    image.addEventListener('click', () => {
        alert('¡Un hermoso gato! 🐱');
    });
});
