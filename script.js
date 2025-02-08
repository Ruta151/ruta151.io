const productsList = [
    { name: "Pokemon TCG: Scarlet & Violet 9 – Journey Together - Elite Trainer Box", description: "Primera prueba", languaje: "Español", price: "69.95 €", image: "images/prismatic1.jpeg"},
    { name: "Pokemon TCG: Scarlet & Violet 9 – Journey Together - Booster CDU (36)", description: "Segunda prueba", languaje: "Inglés", price: "69.95 €", image: "images/prismatic1.jpeg"},
{ name: "Evoluciones Prismáticas Colección Super Premium", description: "Caja Evoluciones Prismáticas Super Premium Español (RESERVA)", languaje: "Español", price: "139.95 €", image: "images/prismaticultra.jpg"}];

const productListElement = document.getElementById("product-list");

productsList.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <p><strong>${product.price}</strong></p>
        <h2>${product.name}</h2>
        <p><soft>Idioma:</soft> ${product.languaje}</p>
        <p><soft>Descripción:</soft>${product.description}</p>
    `;
    productListElement.appendChild(productElement);
});