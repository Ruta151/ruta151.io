const productsList = [
    { name: "Pokemon TCG: Scarlet & Violet 9 – Journey Together - Elite Trainer Box", description: "Primera prueba", languaje: "Español", price: "69.95 €", image: "images/prismatic1.jpeg"},
    { name: "Pokemon TCG: Scarlet & Violet 9 – Journey Together - Booster CDU (36)", description: "Segunda prueba", languaje: "Inglés", price: "69.95 €", image: "images/prismatic1.jpeg"},
    { name: "Riñon en perfectas condiciones", description: "Tercera", languaje: "Alemán", price: "215.95 €", image: "images/prismatic1.jpeg"},
    { name: "Super premium collection", description: "Ya no más Ya no más", languaje: "Japonés", price: "139,95 €", image: "images/prismaticultra.jpg"},
    { name: "Otro más de prueba 5", description: "Ya no más", languaje: "Japonés", price: "69.95 €", image: "images/prismatic1.jpeg"},
    { name: "Otro más de prueba 6", description: "Ya no más", languaje: "Japonés", price: "999.95 €", image: "images/prismatic1.jpeg"},
    { name: "Otro más de prueba 7", description: "Ya no más", languaje: "Japonés", price: "69.95 €", image: "images/prismatic1.jpeg"},
    { name: "Otro más de prueba 8", description: "Ya no más", languaje: "Japonés", price: "69.95 €", image: "images/prismatic1.jpeg"},
    { name: "Otro más de prueba 9", description: "Ya no más", languaje: "Japonés", price: "69.95 €", image: "images/prismatic1.jpeg"},
];

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