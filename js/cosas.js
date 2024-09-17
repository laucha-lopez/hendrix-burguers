// Manejar clics en las hamburguesas
/*document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const burgerName = e.target.getAttribute('data-burger');
        const burgerType = e.target.getAttribute('data-type');
        
        if (promoState === "none" || cart.filter(item => item.name === burgerName).length < 2) {
            cart.push({ name: burgerName, type: burgerType });
            updateCart();
        } else {
            alert("Solo puedes seleccionar hasta 2 hamburguesas de la misma promo.");
        }
    }
});

// Manejar selección de promociones
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('promo-btn')) {
        promoState = e.target.getAttribute('data-promo');
        displayBurgers();
    }
});

// Filtrar hamburguesas por tipo de promoción
function filterBurgersByPromo(type) {
    promoState = type;
    displayBurgers();
}

// Mostrar hamburguesas filtradas
function displayFilteredBurgers(filteredBurgers) {
    const container = document.getElementById('burgers-container');
    container.innerHTML = '';
    filteredBurgers.forEach(burger => {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-3';
        card.innerHTML = `
            <div class="card d-flex flex-row" style="background-color: white;">
                <img src="${burger.imgSrc}" class="img-fluid" style="width: 30%; object-fit: cover;" alt="${burger.name}">
                <div class="card-body d-flex flex-column justify-content-center">
                    <p class="card-title text-center" style="font-size: 30px;">${burger.name}</p>
                    <p class="card-text text-center"><b>Ingredientes</b>: ${burger.ingredients}</p>
                    <button class="btn btn-primary add-to-cart" data-burger="${burger.name}" data-type="${burger.type}">Agregar al Carrito</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Actualizar el carrito
function updateCart() {
    const cartElement = document.getElementById('cart');
    if (cart.length === 0) {
        cartElement.innerHTML = '<p>Tu carrito está vacío.</p>';
    } else {
        const cartItems = cart.map(item => `<li>${item.name} (${item.type})</li>`).join('');
        cartElement.innerHTML = `
            <ul>${cartItems}</ul>
        `;
    }
}

// Manejar clic en el botón de hacer pedido
document.getElementById('checkout-btn').addEventListener('click', function() {
    const cartData = encodeURIComponent(JSON.stringify(cart));
    const url = `https://api.whatsapp.com/send/?phone=542644590545&text=${cartData}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
});*/function calcularPrecio(tipoP, tamaño) {
    if (tipoP === "individual"){
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
    }else if(tipoP ==="doble"){
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
    // Calcula el precio total multiplicando el precio base por la cantidad.
}

/*
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
    // Agrega más hamburguesas según sea necesario
]
// Estado de la promo ("none" si es individual, "promo" si es promoción de 2 hamburguesas)
let promoState = "none"; // Inicializa el estado de la promoción como "none", es decir, sin promoción seleccionada.
let carrito = []; // Array vacío que almacenará los ítems agregados al carrito.
let exito = true; // Variable de control para indicar si una acción se realizó con éxito.

// Función para mostrar hamburguesas en el contenedor
function mostrarBurgers() {
    const container = document.getElementById('burgers-container');
    container.innerHTML = ''; // Limpiar el contenedor

    // Filtrar hamburguesas según el estado de la promoción
    const filteredBurgers = promoState === "none" ? burgers : burgers.filter(burger => burger.promo === "si");

    // Iterar sobre las hamburguesas filtradas
    filteredBurgers.forEach(burger => {
        const card = document.createElement('div');
        card.className = 'col-md-6 mb-3';
        card.innerHTML = `
            <div class="card  d-flex flex-row" style="background-color: white; height: 100%;">
                <img src="${burger.imgSrc}" class="img-fluid" style="width: 30%; object-fit: cover;" alt="${burger.name}">
                <div class="card-body d-flex flex-column justify-content-center">
                    <p class="card-title text-center" style="font-size: 30px;">${burger.name}</p>
                    <p class="card-text text-center"><b>Ingredientes</b>: ${burger.ingredientes}</p>
                    <button class="btn-outline-primary add-to-cart" data-burger="${burger.name}" data-promo="${burger.promo}">Agregar al Carrito</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Agregar event listeners a los nuevos botones
    agregarEventListeners();
}

// Función para agregar eventos a los botones de agregar al carrito
function agregarEventListeners() {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
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
        if (tipoPromo === null) {
            alert("Por favor, selecciona una promoción (individual o doble).");
            return;
        } else if (!tipoPromo) {
            alert("Por favor, selecciona una promoción (individual o doble).");
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
                alert("Hamburguesa ya agregada al carrito");
            }

        } else if (tipoPromo === "doble") {
            // Lógica para promo de 2 hamburguesas
            if (carrito.length > 0 && carrito[carrito.length - 1].tipo === "promo" && carrito[carrito.length - 1].nombre.length < 2) {
                // Si ya hay una promo en el carrito que no está completa, añade la segunda hamburguesa a la promo existente.
                carrito[carrito.length - 1].nombre.push(burgerName);
                alert("Promo ya armada, elija nueva promo o pida");
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
        alert("Selecciona otra hamburguesa para completar la promo");
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

function calcularPrecio(tamaño, cantidad) {
    let precioBase = 0;
    switch (tamaño) {
        case "simple":
            precioBase = 1000;
            break;
        case "doble":
            precioBase = 1500;
            break;
        case "triple":
            precioBase = 2000;
            break;
        case "magnum":
            precioBase = 2500;
            break;
        default:
            precioBase = 1000;
    }
    return precioBase * cantidad; 
    // Calcula el precio total multiplicando el precio base por la cantidad.
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

    if(individualPromo && doblePromo){
        // Si ambas opciones están seleccionadas, muestra una alerta.
        alert("PELOTUDO ELEGI UNA, NO DOS")
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
    button.addEventListener('click', function() {
        const burgerName = this.getAttribute('data-burger'); 
        // Obtiene el nombre de la hamburguesa del atributo data-burger del botón.
        const burgerType = this.getAttribute('data-type'); 
        // Obtiene el tipo de hamburguesa del atributo data-type del botón.
        const burgerPromo = this.getAttribute('data-promo'); 
        // Obtiene el atributo de promoción del botón.
        añadirAlCarrito(burgerName, burgerType, burgerPromo,calcularPrecio()); 
        // Llama a la función añadirAlCarrito con los parámetros obtenidos.
    });
});

// Función para realizar el pedido final
function hacerPedido() {
    let mensaje = "Hola, quiero pedir:\n"; 
    // Inicializa el mensaje que se enviará por WhatsApp.
    if(carrito.length === 0){
        alert("El carrito está vacio, no podes pedir nada"); 
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
    
        // Link de WhatsApp con el mensaje generado
        let urlWhatsApp = `https://api.whatsapp.com/send?phone=542644806290&text=${encodeURIComponent(mensaje)}`; 
        // Crea un URL para enviar el mensaje por WhatsApp con el contenido del mensaje.
        window.open(urlWhatsApp); 
        // Abre una nueva ventana con el link de WhatsApp.
        carrito = [] 
        // Limpia el carrito después de enviar el pedido.
    }
}
*/