
const ahora = new Date();
function mostrarAlerta_horario() {
    Swal.fire({
        title: '¡Fuera de horario!',
        text: 'El horario de pedido es de 20pm a 1am.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        customClass: {
            confirmButton: 'my-custom-button' // Usa la clase personalizada
        }
    });
}

document.getElementById('pedir_link').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace se siga normalmente
    hora = ahora.getHours()
    if (hora < 20 && hora > 1) {
        mostrarAlerta_horario()
    } else {
        window.location.href = 'menu_pedido.html';
    }

});
