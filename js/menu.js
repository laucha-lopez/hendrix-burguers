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
  document.addEventListener('DOMContentLoaded', function() {
    // Tu función aquí
    mostrarBurgers()
});
    function mostrarBurgers() {
    const container = document.getElementById('burgers-container');
    container.innerHTML = ''; // Limpiar el contenedor

    // Iterar sobre las hamburguesas filtradas
    burgers.forEach(burger => {
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
}