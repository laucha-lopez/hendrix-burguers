export function mostrarAlerta_horario() {
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
export function mostrarAlerta_eligeunasolapromo() {
    Swal.fire({
        title: '¡Hubo un problema!',
        text: 'Selecciona solo una promo, ya sea individual o doble.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        customClass: {
            confirmButton: 'my-custom-button' // Usa la clase personalizada
        }
    });
}
/*export function mostrarAlerta_eligeunasolapromo() {
    Swal.fire({
        title: '¡Hubo un problema!',
        text: 'Selecciona solo una promo, ya sea individual o doble.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        customClass: {
            confirmButton: 'my-custom-button' // Usa la clase personalizada
        }
    });
}*/
export function mostrarAlerta_hamburguesaagregada() {
    Swal.fire({
        title: '¡Todo salió bien!',
        text: 'Tu hamburguesa ya fue agregada al carrito.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        customClass: {
            confirmButton: 'my-custom-button' // Usa la clase personalizada
        }
    });
}
export function mostrarAlerta_promoarmada() {
    Swal.fire({
        title: '¡Todo salió bien!',
        text: 'Tu promo ya fue agregada al carrito.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        customClass: {
            confirmButton: 'my-custom-button' // Usa la clase personalizada
        }
    });
}
export function mostrarAlerta_faltauna() {
    Swal.fire({
        title: '¡Hubo un problema!',
        text: 'Debes seleccionar otra hamrbuguesa para completar la promo.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        customClass: {
            confirmButton: 'my-custom-button' // Usa la clase personalizada
        }
    });
}
export function mostrarAlerta_ubicacion() {
        Swal.fire({
            title: '¡Hubo un problema!',
            text: 'Debes agregar una ubicacion.',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            customClass: {
                confirmButton: 'my-custom-button' // Usa la clase personalizada
            }
        });
    }
export function mostrarAlerta_carritovacio() {
    Swal.fire({
        title: '¡Hubo un problema!',
        text: 'El carrito está vacio.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        customClass: {
            confirmButton: 'my-custom-button' // Usa la clase personalizada
        }
    });
    }

