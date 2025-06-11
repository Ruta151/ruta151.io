const productsList = [ 
    
    { name: "Journey Together Booster Box de 36 sobres", description: "<br>🟡Cazadores de cartas cartas <br>🔵Coleccionistas.", languaje: "Inglés", price: "215.95 €", image: "images/Journeybb.png", status: "AGOTADO"},
    { name: "Evoluciones Prismáticas Colección Super Premium", description: "<br>🔵 Coleccionistas", languaje: "Español", price: "139.95 €", image: "images/Ultrapremium.jpg", status: "AGOTADO"},
    { name: "Journey Together 3-Pack Blister", description: "<br>🟡 Cazadores de cartas caras <br>🔵 Coleccionistas.", languaje: "Inglés", price: "19.95 €", image: "images/Blister.png", status: "AGOTADO"},
    { name: "Rivales Predestinados ETB", description: "<br>🔵 Coleccionistas <br>🔴 Jugadores <br>🟡 Cazadores de cartas caras.", languaje: "Español", price: "69.95 €", image: "images/ETB rivales destinados castellano.jpg", status: "AGOTADO"},
    { name: "Rivales Predestinados Booster Box 18 sobres", description: "<br>🟡 Cazadores de cartas cartas <br>🔵 Coleccionistas.", languaje: "Español", price: "100/190 €", image: "images/Booster box rivales destiandos castellano.jpg", status: "RESERVA"},
    { name: "3-Pack Blister Rivales Predestinados", description: "<br>🟡 Cazadores de cartas cartas <br>🔵 Coleccionistas.", languaje: "Español", price: "19.95 €", image: "images/Blister rivales destinados castellano.jpg", status: "RESERVA"},
{ name: "Cynthia Premium EX Box", description: "<br>🟡 Cazadores de cartas <br>🔵 Coleccionistas.", languaje: "Español", price: "59.95 €", image: "images/Cynthia Premium EX Box.png", status: "RESERVA"},
{ name: "Charizard ex Super Premium Collection", description: "<br>🟡 Cazadores de cartas caras <br>🔵 Coleccionistas.", languaje: "Inglés", price: "69,95 €", image: "images/Premium collection charizard.jpg", status: "DISPONIBLE"},
{ name: "Grand Adventure Collection", description: "<br>🔵 Coleccionistas.", languaje: "Inglés", price: "39,95 €", image: "images/Grand adventure.jpg", status: "DISPONIBLE"},
{ name: "Sobres emblistados Rivales Predestinados", description: "<br>🟡 Cazadores de cartas.", languaje: "Español", price: "5,95 €", image: "images/Sombres emblistados castellano.jpg", status: "RESERVA"},
{ name: "ETB White Flare (Reshiram)", description: "<br>🔵 Coleccionistas 🔴 Jugadores 🟡 Cazadores de cartas.", languaje: "Español", price: "59,99 €", image: "images/ETB Reshiram.png", status: "RESERVA"},
{ name: "ETB Black Bolt (Zekrom)", description: "<br>🔵 Coleccionistas 🔴 Jugadores 🟡 Cazadores de cartas.", languaje: "Español", price: "59,99 €", image: "images/ETB Zekrom.png", status: "RESERVA"},
{ name: "Booster Bundle White Flare (Reshiram) ", description: "<br>🟡 Cazadores de cartas 🔵 Coleccionistas.", languaje: "Español", price: "34,99 €", image: "images/Booster bundle reshiram.jpg", status: "RESERVA"},
{ name: "Booster Bundle Black Bolt (Zekrom)", description: "<br>🟡 Cazadores de cartas 🔵 Coleccionistas.", languaje: "Español", price: "34,99 €", image: "images/Booster bundle Zekrom.jpg", status: "RESERVA"},
{ name: "Caja de Ilustración de Victini", description: "<br>🟡 Cazadores de cartas 🔵 Coleccionistas.", languaje: "Español", price: "32 €", image: "images/ilustración victini.jpg", status: "RESERVA"},
{ name: "3-Pack Blister White Flare y Black Bolt", description: "<br>🟡 Cazadores de cartas 🔵 Coleccionistas.", languaje: "Español", price: "22,99 €", image: "images/Sin imagen español.jpg", status: "RESERVA"},
]
// Salto de línea --> <br>
const icons = [
    {link: "https://t.me/+1VT5Ove5UqNiNGNk", icon: "images/telegram-icon.png"},
    {link: "https://es.wallapop.com/user/ruta151-463109392", icon: "images/wallapop-icon.png"}
];


// A partir de aqui no tocar

document.addEventListener("DOMContentLoaded", () => {
    const iconList = document.getElementById("icon-list1");
    icons.forEach(({link, icon}) => {
        const a = document.createElement("a");
        a.href = link;
        a.target = "_blank";
        
        const img = document.createElement("img");
        img.src = icon;
        img.alt = "Social Icon";
        img.classList.add("social-icon");
        
        a.appendChild(img);
        iconList.appendChild(a);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const iconList = document.getElementById("icon-list2");
    icons.forEach(({link, icon}) => {
        const a = document.createElement("a");
        a.href = link;
        a.target = "_blank";
        
        const img = document.createElement("img");
        img.src = icon;
        img.alt = "Social Icon";
        img.classList.add("social-icon");
        
        a.appendChild(img);
        iconList.appendChild(a);
    });
});


// Función para ordenar productos por su estado
function sortProductsByStatus(products) {
    const statusOrder = {
        "RESERVA": 1,
        "DISPONIBLE": 2,
        "AGOTADO": 3
    };
    
    return products.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
}

// Ordenar productos
const sortedProducts = sortProductsByStatus(productsList);

const productListElement = document.getElementById("product-list");

sortedProducts.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <p><strong>${product.price}</strong></p>
        <span class="product-status ${product.status.toLowerCase()}">${product.status}</span>
        <h2>${product.name}</h2>
        <p><soft>Idioma:</soft> ${product.languaje}</p>
        <p><soft>Ideal para: </soft>${product.description}</p>
    `;

    productListElement.appendChild(productElement);
});
