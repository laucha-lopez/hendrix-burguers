// Datos de hamburguesas y promociones
const burgers = [
    { name: "BURGUER HENDRIX", ingredients: "Dambo, jamon cocido, huevo, cebolla morada, lechuga, tomate, ketchup y mayonesa.", imgSrc: "img/B-Hendrix.jpg", promo: "si" },
    { name: "BURGUER ARTESANAL", ingredients: "Pan artesanal, cheddar, cebolla crispy, lechuga, tomate, alioli.", imgSrc: "img/B-Artesanal.jpg", promo: "si" },
    { name: "BURGUER ONION BBQ", ingredients: "Cheddar, cebolla morada y mayonesa.", imgSrc: "img/B-OBBQ.jpg", promo: "si" },
    { name: "BURGUER MEDITERRANEA", ingredients: "Pan artesanal, muzza, jamon crudo, rucula, tomate y alioli.", imgSrc: "img/B-Mediterranea.jpg", promo: "si" },
    { name: "BURGUER NAPO", ingredients: "Muzza, jamon cocido, cebolla morada, tomate y mayonesa.", imgSrc: "img/B-Napo.jpg", promo: "si" },
    { name: "BURGUER TEX-MEX", ingredients: "Cheddar, bacon y guacamole.", imgSrc: "img/B-Tex-Mex.jpg", promo: "si" },
    { name: "BURGUER MALBEC", ingredients: "Pan artesanal, cebolla con reducción de malbec, queso emmenthal, albahaca y tomates cherrys.", imgSrc: "img/B-Malbec.jpg", promo: "no" },
    { name: "PATTY MELT", ingredients: "Pan de molde, cheddar, bacon, cebolla caramelizada, ketchup y mayonesa.", imgSrc: "img/PattyMelt.jpg", promo: "no" },
    { name: "BURGUER 4 QUESOS", ingredients: " Pan de queso, cheddar, muzza, roquefort, provolone, cebolla a la plancha, rúcula y mayonesa. ", imgSrc: "img/B-4Q.jpg", promo: "no" },
    { name: "BURGUER DELUXE", ingredients: "Pan de queso, cheddar, bacon, cebolla crispy, lechuga, tomate, ketchup y mayonesa.", imgSrc: "img/B-Deluxe.jpg", promo: "no" },
    // Agrega más hamburguesas según sea necesario
];

// Estado de la promo ("none" si es individual, "promo" si es promoción de 2 hamburguesas)
let promoState = "none"; // Inicialmente, sin promoción
let carrito = [];
let exito = true;

// Función para mostrar hamburguesas en el contenedor
function displayBurgers() {
    const container = document.getElementById('burgers-container');
    container.innerHTML = ''; // Limpiar el contenedor
    // Filtrar hamburguesas según el estado de la promoción
    const filteredBurgers = promoState === "none" 
        ? burgers 
        : burgers.filter(burger => burger.promo === "si"); // Solo mostrar las que están en promoción
    
    filteredBurgers.forEach(burger => {
        const card = document.createElement('div');
        card.className = 'col-md-6 mb-3';
        card.innerHTML = `
            <div class="card  d-flex flex-row" style="background-color: white; height: 100%;">
                <img src="${burger.imgSrc}" class="img-fluid" style="width: 30%; object-fit: cover;" alt="${burger.name}">
                <div class="card-body d-flex flex-column justify-content-center">
                    <p class="card-title text-center" style="font-size: 30px;">${burger.name}</p>
                    <p class="card-text text-center"><b>Ingredientes</b>: ${burger.ingredients}</p>
                    <button class="btn-outline-primary add-to-cart" data-burger="${burger.name}" data-promo="${burger.promo}">Agregar al Carrito</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Llamar a la función al cargar la página
displayBurgers();


// Función para añadir hamburguesas al carrito
function añadirAlCarrito(burgerName, burgerType, burgerPromo) {
    const tipoPromo = obtenerTipoPromo();
    const tamañoSeleccionado = obtenerTamaño();
    try{
        if(tipoPromo === null){
            alert("Por favor, selecciona una promoción (individual o doble).");
            return
        }else if (!tipoPromo) {
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
        if(exito){
            alert("Hamburguesa ya agregada al carrito");
        }
          
    } else if (tipoPromo === "doble") {
        // Lógica para promo de 2 hamburguesas
        if (carrito.length > 0 && carrito[carrito.length - 1].tipo === "promo" && carrito[carrito.length - 1].nombre.length < 2) {
            // Añadir la segunda hamburguesa a la promo existente
            carrito[carrito.length - 1].nombre.push(burgerName);
            alert("Promo ya armada, elija nueva promo o pida");
        } else {
            // Crear nueva promo y agregar la primera hamburguesa
            let item = {
                tipo: "promo",
                nombre: [burgerName], // Empezar con un array que contiene el primer nombre
                tamaño: tamañoSeleccionado,
                cantidad: 2,
                precio: calcularPrecio(tamañoSeleccionado, 2)
            };
            
            carrito.push(item);
        }
    }
    }catch(error){
        alert("algo salío mal");
        exito = false;
    }
}



let promoSeleccionadas = [];

function manejarPromo(nombre, tipo) {
    promoSeleccionadas.push({ nombre, tipo });
    
    if (promoSeleccionadas.length === 2) {
        // Añadir las dos hamburguesas al carrito como promo
        añadirPromoAlCarrito(promoSeleccionadas);
        promoSeleccionadas = []; // Resetear las hamburguesas seleccionadas
    } else {
        alert("Selecciona otra hamburguesa para completar la promo");
    }
}

function añadirPromoAlCarrito(hamburguesas) {
    let tipo = hamburguesas[0].tipo; // Usar el tamaño de la primera hamburguesa
    let precio = calcularPrecio(tipo, 2); // Calcular precio para 2 hamburguesas
    
    let item = {
        tipo: "promo",
        nombre: hamburguesas.map(h => h.nombre),
        tamaño: tipo,
        cantidad: 2,
        precio: precio
    };
    
    carrito.push(item);
    console.log("Carrito actualizado: ", carrito);
}
function calcularPrecio(tamaño, cantidad) {
    let precioBase = 0;
    switch (tamaño) {
        case "simple":
            precioBase = 300;
            break;
        case "doble":
            precioBase = 500;
            break;
        case "triple":
            precioBase = 700;
            break;
        case "magnum":
            precioBase = 900;
            break;
    }
    return precioBase * cantidad;
}
function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = ''; // Limpiar contenido previo

    carrito.forEach((item) => {
        let itemTexto = `<p>${item.tipo}: ${item.nombre} (${item.tamaño}) - ${item.cantidad} unidad(es) - $${item.precio}</p>`;
        carritoDiv.innerHTML += itemTexto;
    });
}

function obtenerTipoPromo() {
    const individualPromo = document.getElementById('individualPromo').checked;
    const doblePromo = document.getElementById('doblePromo').checked;
    if(individualPromo && doblePromo){
        alert("PELOTUDO ELEGI UNA, NO DOS")
        return null;
    } 
    if (individualPromo) {
        return "individual";
    } else if (doblePromo) {
        return "doble";
    } else {
        return null; // No se ha seleccionado una promo
    }
}

function obtenerTamaño() {
    return document.getElementById('tamañoSeleccionado').value;
}
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const burgerName = this.getAttribute('data-burger');
        const burgerType = this.getAttribute('data-type');
        const burgerPromo = this.getAttribute('data-promo');
        añadirAlCarrito(burgerName, burgerType, burgerPromo);
    });
});
function hacerPedido() {
    let mensaje = "Hola, quiero pedir:\n";
    if(carrito.length === 0){
        alert("El carrito está vacio, no podes pedir nada");
    }else{
        carrito.forEach(item => {
            if (item.tipo === "individual") {
                mensaje += `Una hamburguesa: ${item.nombre} (${item.tamaño})\n`;
            } else if (item.tipo === "promo") {
                mensaje += ` Una promo doble con: ${item.nombre.join(' y ')} (${item.tamaño})\n`;
            }
        });
    
        // Link de WhatsApp con el mensaje generado
        let urlWhatsApp = `https://api.whatsapp.com/send?phone=542644806290&text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsApp);
        carrito = []
    }
}

