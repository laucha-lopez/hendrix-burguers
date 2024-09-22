// Datos de hamburguesas y promociones
const burgers = [
    { name: "BURGUER HENDRIX", ingredientes: "Dambo, jamon cocido, huevo, cebolla morada, lechuga, tomate, ketchup y mayonesa.", imgSrc: "img/B-Hendrix.jpg", promo: "si" },
    { name: "BURGUER ARTESANAL", ingredientes: "Pan artesanal, cheddar, cebolla crispy, lechuga, tomate, alioli.", imgSrc: "img/B-Artesanal.jpg", promo: "si" },
    { name: "BURGUER ONION BBQ", ingredientes: "Cheddar, cebolla morada y mayonesa.", imgSrc: "img/B-OBBQ.jpg", promo: "si" },
    { name: "BURGUER MEDITERRANEA", ingredientes: "Pan artesanal, muzza, jamon crudo, rucula, tomate y alioli.", imgSrc: "img/B-Mediterranea.jpg", promo: "si" },
    { name: "BURGUER NAPO", ingredientes: "Muzza, jamon cocido, cebolla morada, tomate y mayonesa.", imgSrc: "img/B-Napo.jpg", promo: "si" },
    { name: "BURGUER TEX-MEX", ingredientes: "Cheddar, bacon y guacamole.", imgSrc: "img/B-Tex-Mex.jpg", promo: "si" },
    { name: "BURGUER MALBEC", ingredientes: "Pan artesanal, cebolla con reducción de malbec, queso emmenthal, albahaca y tomates cherrys.", imgSrc: "img/B-Malbec.jpg", promo: "no" },
    { name: "PATTY MELT", ingredientes: "Pan de molde, cheddar, bacon, cebolla caramelizada, ketchup y mayonesa.", imgSrc: "img/PattyMelt.jpg", promo: "no" },
    { name: "BURGUER 4 QUESOS", ingredientes: " Pan de queso, cheddar, muzza, roquefort, provolone, cebolla a la plancha, rúcula y mayonesa. ", imgSrc: "img/B-4Q.jpg", promo: "no" },
    { name: "BURGUER DELUXE", ingredientes: "Pan de queso, cheddar, bacon, cebolla crispy, lechuga, tomate, ketchup y mayonesa.", imgSrc: "img/B-Deluxe.jpg", promo: "no" },
    { name: "BURGUER CHESSE", ingredientes: "Pan de queso, cheddar, cebolla a la plancha, ketchup y mayonesa.", imgSrc: "", promo: "si" },
    { name: "BURGUER PHILLY", ingredientes: "Pan de queso, dambo, huevo, cebolla caramelizada, tomate, ketchuo y mayonesa.", imgSrc: "", promo: "si" },
    { name: "BURGUER HOUSE", ingredientes: "Cheddar, cebolla morada y mayonesa.", imgSrc: "", promo: "si" },
    { name: "BURGUER MOLLO", ingredientes: "Pan artesanal, cheddar, bacon, huevo y mayonesa.", imgSrc: "", promo: "si" },
    { name: "BURGUER BLUE CHEESE", ingredientes: "Pan artesanal, roquefort, cebolla morada, rucula, tomate y alioli.", imgSrc: "", promo: "si" },
    { name: "BURGUER YORK", ingredientes: "Muzza, bacon, huevo, cebolla a la plancha y barbacoa.", imgSrc: "", promo: "si" },
    { name: "BURGUER CLASSIC/VEGIE", ingredientes: "Cheddar, cebolla morada, pepino, lechuga, tomate, ketchup y mayonesa.", imgSrc: "", promo: "si" },
    { name: "BURGUER BACON", ingredientes: "Cheddar, bacon, cebolla a la plancha, tomate, ketchup y mayonesa.", imgSrc: "", promo: "si" },
    { name: "BURGUER ROYAL", ingredientes: "Pan de queso, cheddar, bacon, cebolla a la plancha, pepinos y barbacoa.", imgSrc: "", promo: "si" },
    { name: "BURGUER HONEY", ingredientes: "Pan de queso, cheddar, bacon, cebolla a la plancha, mostaza y miel.", imgSrc: "", promo: "si" },
    { name: "BURGUER PROVO", ingredientes: "Pan artesanal, provolone, cabolla morada, tomate y alioli.", imgSrc: "", promo: "si" },
    { name: "BURGUER PUMPER", ingredientes: "Pan de queso, cheddar, bacon, cebolla morada y barbacoa.", imgSrc: "", promo: "si" },
    { name: "BURGUER POLLO CRISPY", ingredientes: "Cheddar, bacon, cebolla morada, pepino, lechuga, mostaza y miel.", imgSrc: "", promo: "no" },

    // Agrega más hamburguesas según sea necesario
]
const opcionesExtras = [
    { id: 'aros_cebolla', nombre: 'Aros de cebolla x10', precio: 4000 },
    { id: 'nuggets_pollo', nombre: 'Nuggets de pollo x10', precio: 4000 },
    { id: 'extra_cheddar', nombre: 'Cheddar', precio: 5000 },
    { id: 'extra_papas', nombre: 'Papas', precio: 4500 }
];
import {
    mostrarAlerta_horario, mostrarAlerta_eligeunasolapromo, mostrarAlerta_hamburguesaagregada, mostrarAlerta_promoarmada, mostrarAlerta_faltauna, mostrarAlerta_ubicacion, mostrarAlerta_carritovacio
} from './funciones_repetidas.js';
// Estado de la promo ("none" si es individual, "promo" si es promoción de 2 hamburguesas)
let promoState = "none"; // Inicializa el estado de la promoción como "none", es decir, sin promoción seleccionada.
let carrito = []; // Array vacío que almacenará los ítems agregados al carrito.
let exito = true; // Variable de control para indicar si una acción se realizó con éxito.
let precio = 0
let mapsLink
let ubi
let extras = ""

function mostrarBurgers() {
    const container = document.getElementById('burgers-container');
    if (container) {
        container.innerHTML = ''; // Limpiar el contenedor
        // Filtrar hamburguesas según el estado de la promoción
        const filteredBurgers = promoState === "none" ? burgers : burgers.filter(burger => burger.promo === "si");

        // Iterar sobre las hamburguesas filtradas
        filteredBurgers.forEach(burger => {
            const card = document.createElement('div');
            card.className = 'col-md-6 mb-3';
            card.innerHTML = `
            <div class="card  d-flex flex-row" >
                <img src="${burger.imgSrc}" class="img-fluid"  alt="${burger.name}">
                <div class="card-body d-flex flex-column justify-content-center">
                    <p class="card-title text-center" >${burger.name}</p>
                    <p class="card-text text-center"><b>Ingredientes</b>: ${burger.ingredientes}</p>
                    <button class="btn-outline-primary add-to-cart" data-burger="${burger.name}" data-promo="${burger.promo}">Agregar al Carrito</button>
                </div>
            </div>
        `;
            container.appendChild(card);
        });

        // Agregar event listeners a los nuevos botones
        agregarEventListeners();
    } else {
        alert("errodasdar")
    }

}

// Función para agregar eventos a los botones de agregar al carrito
function agregarEventListeners() {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const burgerName = this.getAttribute('data-burger');
            const burgerPromo = this.getAttribute('data-promo');
            añadirAlCarrito(burgerName, burgerPromo);
        });
    });
}

// Función para manejar la selección de promoción
function seleccionarPromo(nuevaPromo) {
    promoState = nuevaPromo;
    mostrarBurgers(); // Actualizar las hamburguesas mostradas
}

// Inicializar hamburguesas al cargar la página
mostrarBurgers();

// Event listeners para el cambio de promo
document.getElementById('individualPromo').addEventListener('click', () => seleccionarPromo("none"));
document.getElementById('doblePromo').addEventListener('click', () => seleccionarPromo("si"));
// Llama a la función mostrarBurgers para mostrar las hamburguesas cuando la página carga.

// Función para añadir hamburguesas al carrito
function añadirAlCarrito(burgerName, burgerType, burgerPromo) {
    const tipoPromo = obtenerTipoPromo();
    // Obtiene el tipo de promoción seleccionada (individual o doble).
    const tamañoSeleccionado = obtenerTamaño();
    // Obtiene el tamaño de la hamburguesa seleccionada.

    try {
        if (!tipoPromo) {
            mostrarAlerta_eligeunasolapromo()
            return;
        } else if (tipoPromo === null) {
            mostrarAlerta_eligeunasolapromo()
            return;
        }

        if (tipoPromo === "individual") {
            // Añadir hamburguesa individual al carrito
            let item = {
                tipo: "individual",
                nombre: burgerName,
                tamaño: tamañoSeleccionado,
                cantidad: 1,
                precio: calcularPrecio(tamañoSeleccionado, 1)
            };
            carrito.push(item);
            // Agrega la hamburguesa individual al carrito.

            if (exito) {
                mostrarAlerta_hamburguesaagregada()
            }

        } else if (tipoPromo === "doble") {
            // Lógica para promo de 2 hamburguesas
            if (carrito.length > 0 && carrito[carrito.length - 1].tipo === "promo" && carrito[carrito.length - 1].nombre.length < 2) {
                // Si ya hay una promo en el carrito que no está completa, añade la segunda hamburguesa a la promo existente.
                carrito[carrito.length - 1].nombre.push(burgerName);
                mostrarAlerta_promoarmada()
            } else {
                // Si no hay una promo incompleta, crea una nueva promo y añade la primera hamburguesa.
                let item = {
                    tipo: "promo",
                    nombre: [burgerName], // Empezar con un array que contiene el primer nombre.
                    tamaño: tamañoSeleccionado,
                    cantidad: 2,
                    precio: calcularPrecio(tamañoSeleccionado, 2)
                };
                carrito.push(item);
                // Agrega la promo al carrito.
            }
        }
    } catch (error) {
        alert("algo salío mal");
        exito = false;
        // Si ocurre un error, alerta y marca exito como false.
    }
}

let promoSeleccionadas = [];
// Array vacío para almacenar las hamburguesas seleccionadas en la promo.

function manejarPromo(nombre, tipo) {
    promoSeleccionadas.push({ nombre, tipo });
    // Añade la hamburguesa seleccionada a promoSeleccionadas.

    if (promoSeleccionadas.length === 2) {
        // Si se han seleccionado 2 hamburguesas, añade la promo al carrito.
        añadirPromoAlCarrito(promoSeleccionadas);
        promoSeleccionadas = [];
        // Resetea las hamburguesas seleccionadas.
    } else {
        mostrarAlerta_faltauna()
    }
}

function añadirPromoAlCarrito(hamburguesas) {
    let tipo = hamburguesas[0].tipo;
    // Usa el tamaño de la primera hamburguesa como referencia.
    let precio = calcularPrecio(tipo, 2);
    // Calcula el precio para 2 hamburguesas.

    let item = {
        tipo: "promo",
        nombre: hamburguesas.map(h => h.nombre),
        // Mapea los nombres de las hamburguesas seleccionadas.
        tamaño: tipo,
        cantidad: 2,
        precio: precio
    };

    carrito.push(item);
    // Añade la promo al carrito.
    console.log("Carrito actualizado: ", carrito);
    // Muestra en consola el carrito actualizado.
}

function calcularPrecio(tamaño, tipoP) {
    let precioBase;
    if (tipoP === 1) {
        switch (tamaño) {
            case "simple":
                precioBase = 6000;
                break;
            case "doble":
                precioBase = 6700;
                break;
            case "triple":
                precioBase = 7400;
                break;
            case "magnum":
                precioBase = 8100;
                break;
            default:
                precioBase = 6000;
        }
    } else if (tipoP === 2) {
        switch (tamaño) {
            case "simple":
                precioBase = 10600;
                break;
            case "doble":
                precioBase = 12000;
                break;
            case "triple":
                precioBase = 13400;
                break;
            case "magnum":
                precioBase = 14800;
                break;
            default:
                precioBase = 10600;
        }
    }
    precio += precioBase
    return precioBase; // Retorna el precio base calculado
}

// Función para mostrar el contenido del carrito en el HTML
function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    // Obtiene el div donde se mostrará el contenido del carrito.
    carritoDiv.innerHTML = ''; // Limpiar contenido previo

    carrito.forEach((item) => {
        // Itera sobre cada ítem en el carrito.
        let itemTexto = `<p>${item.tipo}: ${item.nombre} (${item.tamaño}) - ${item.cantidad} unidad(es) - $${item.precio}</p>`;
        // Crea una cadena HTML que describe el ítem.
        carritoDiv.innerHTML += itemTexto;
        // Añade el texto del ítem al contenido del div.
    });
}

// Función para obtener el tipo de promoción seleccionada
function obtenerTipoPromo() {
    const individualPromo = document.getElementById('individualPromo').checked;
    // Verifica si la opción de promoción individual está seleccionada.
    const doblePromo = document.getElementById('doblePromo').checked;
    // Verifica si la opción de promoción doble está seleccionada.

    if (individualPromo && doblePromo) {
        // Si ambas opciones están seleccionadas, muestra una alerta.
        mostrarAlerta_eligeunasolapromo()
        return null;
        // Retorna null ya que no se puede seleccionar más de una promoción.
    }
    if (individualPromo) {
        return "individual";
        // Retorna "individual" si se seleccionó la promoción individual.
    } else if (doblePromo) {
        return "doble";
        // Retorna "doble" si se seleccionó la promoción doble.
    } else {
        return null; // No se ha seleccionado una promo
        // Retorna null si no se ha seleccionado ninguna promoción.
    }
}

// Función para obtener el tamaño seleccionado de la hamburguesa
function obtenerTamaño() {
    return document.getElementById('tamañoSeleccionado').value;
    // Obtiene el valor del tamaño seleccionado del elemento con id 'tamañoSeleccionado'.
}

// Agrega un evento click a cada botón de agregar al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const burgerName = this.getAttribute('data-burger');
        // Obtiene el nombre de la hamburguesa del atributo data-burger del botón.
        const burgerType = this.getAttribute('data-type');
        // Obtiene el tipo de hamburguesa del atributo data-type del botón.
        const burgerPromo = this.getAttribute('data-promo');
        // Obtiene el atributo de promoción del botón.
        añadirAlCarrito(burgerName, burgerType, burgerPromo, calcularPrecio());
        // Llama a la función añadirAlCarrito con los parámetros obtenidos.
    });
});

function generarLink() {
    const ubicacion = document.getElementById('ubicacion').value;
    ubi = document.getElementById('ubicacion').value
    if (ubicacion) {
        const encodedUbicacion = encodeURIComponent(ubicacion);
        mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedUbicacion}`;
        return true
    } else {
        mostrarAlerta_ubicacion()
        return false
    }
}

function buscar_extras() {
    /*const extra_aros = document.getElementById('aros_cebolla').checked; 
    const extra_nuggets = document.getElementById('nuggets_pollo').checked; 
    const extra_cheddar = document.getElementById('extra_cheddar').checked; 
    const extra_papas = document.getElementById('extra_papas').checked; 
    if (extra_aros){
        extras += " Aros de cebolla x10"
        precio+=4000
    }
    if(extra_nuggets){
        extras += " Nugeets de pollo x10"
        precio+=4000
    }
    if(extra_cheddar){
        extras += " Cheddar"
        precio+=5000
    }
    if(extra_papas){
        extras += " Papas"
        precio+=4500
    }*/
    opcionesExtras.forEach(extra => {
        if (document.getElementById(extra.id).checked) {
            if (extras == "") {
                extras += ` ${extra.nombre}`;
                precio += extra.precio;
            } else {
                extras += ` , ${extra.nombre}`;
                precio += extra.precio;
            }
        }
    });
}
// Función para realizar el pedido final
function hacer_Pedido() {
    console.log("Dadsa")
    if (generarLink()) {
        let mensaje = "Hola, quiero pedir:\n";
        // Inicializa el mensaje que se enviará por WhatsApp.
        if (carrito.length === 0) {
            mostrarAlerta_carritovacio()
            // Muestra una alerta si el carrito está vacío.
        } else {
            carrito.forEach(item => {
                // Itera sobre cada ítem en el carrito.
                if (item.tipo === "individual") {
                    mensaje += `Una hamburguesa: ${item.nombre} (${item.tamaño})\n`;
                    // Añade la información de una hamburguesa individual al mensaje.
                } else if (item.tipo === "promo") {
                    mensaje += ` Una promo doble con: ${item.nombre.join(' y ')} (${item.tamaño})\n`;
                    // Añade la información de una promoción doble al mensaje.
                }
            });
            buscar_extras()
            if (extras) {
                mensaje += ` Extras: ${extras}\n`;
            }
            mensaje += ` Precio total: ${precio}\n`;
            mensaje += ` Ubicacion: ${mapsLink}\n\n${ubi}`;

            // Link de WhatsApp con el mensaje generado
            let urlWhatsApp = `https://api.whatsapp.com/send?phone=542644806290&text=${encodeURIComponent(mensaje)}`;
            // Crea un URL para enviar el mensaje por WhatsApp con el contenido del mensaje.
            window.open(urlWhatsApp);
            // Abre una nueva ventana con el link de WhatsApp.
            carrito = []
            precio = 0
            mapsLink = ""
            ubi = ""
            extras = ""
            // Limpia el carrito después de enviar el pedido.
        }
    } else {
        return;
    }
}
document.getElementById('boton_pedir').addEventListener('click', hacer_Pedido);
