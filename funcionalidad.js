document.addEventListener('DOMContentLoaded', function () {
    const products = {
        abarrotes: [
            { name: 'Abarrote 1', image: 'img/alimentos/atun3.png' },
            { name: 'Abarrote 2', image: 'img/alimentos/tari.png' },
            { name: 'Abarrote 3', image: 'img/alimentos/fideos3.png' },
            { name: 'Abarrote 4', image: 'img/alimentos/mermelada.png' },
            { name: 'Abarrote 5', image: 'img/alimentos/mermelada.png' },
            { name: 'Abarrote 6', image: 'img/alimentos/fideos3.png' },
            { name: 'Abarrote 7', image: 'img/alimentos/tari.png' },
            { name: 'Abarrote 8', image: 'img/alimentos/atun3.png' },
            { name: 'Abarrote 9', image: 'img/alimentos/atun3.png' },
            { name: 'Abarrote 10', image: 'img/alimentos/tari.png' },
            { name: 'Abarrote 11', image: 'img/alimentos/fideos3.png' },
            { name: 'Abarrote 12', image: 'img/alimentos/mermelada.png' }
        ],
        bebidas: [
            { name: 'Bebida 1', image: 'img/alimentos/gaseosa.png' },
            { name: 'Bebida 2', image: 'img/alimentos/agua.png' },
            { name: 'Bebida 3', image: 'img/alimentos/cifrut.png' },
            { name: 'Bebida 4', image: 'img/alimentos/gatorade3.png' },
            { name: 'Bebida 5', image: 'img/alimentos/gatorade3.png' },
            { name: 'Bebida 6', image: 'img/alimentos/cifrut.png' },
            { name: 'Bebida 7', image: 'img/alimentos/agua.png' },
            { name: 'Bebida 8', image: 'img/alimentos/gaseosa.png' },
            { name: 'Bebida 9', image: 'img/alimentos/gaseosa.png' },
            { name: 'Bebida 10', image: 'img/alimentos/agua.png' },
            { name: 'Bebida 11', image: 'img/alimentos/gatorade3.png' },
            { name: 'Bebida 12', image: 'img/alimentos/cifrut.png' },
        ],
        lacteos: [
            { name: 'Lacteo 1', image: 'img/alimentos/Gloria.png' },
            { name: 'Lacteo 2', image: 'img/alimentos/condensada.png' },
            { name: 'Lacteo 3', image: 'img/alimentos/yogurt.png' },
            { name: 'Lacteo 4', image: 'img/alimentos/helado2.png' },
            { name: 'Lacteo 5', image: 'img/alimentos/helado2.png' },
            { name: 'Lacteo 6', image: 'img/alimentos/yogurt.png' },
            { name: 'Lacteo 7', image: 'img/alimentos/condensada.png' },
            { name: 'Lacteo 8', image: 'img/alimentos/Gloria.png' },
            { name: 'Lacteo 9', image: 'img/alimentos/Gloria.png' },
            { name: 'Lacteo 10', image: 'img/alimentos/condensada.png' },
            { name: 'Lacteo 11', image: 'img/alimentos/yogurt.png' },
            { name: 'Lacteo 12', image: 'img/alimentos/helado2.png' },
        ],
        confiteria: [
            { name: 'Confiteria 1', image: 'img/alimentos/picaras.png' },
            { name: 'Confiteria 2', image: 'img/alimentos/casino.png' },
            { name: 'Confiteria 3', image: 'img/alimentos/nik.png' },
            { name: 'Confiteria 4', image: 'img/alimentos/donapepa.png' },
            { name: 'Confiteria 5', image: 'img/alimentos/donapepa.png' },
            { name: 'Confiteria 6', image: 'img/alimentos/nik.png' },
            { name: 'Confiteria 7', image: 'img/alimentos/casino.png' },
            { name: 'Confiteria 8', image: 'img/alimentos/picaras.png' },
            { name: 'Confiteria 9', image: 'img/alimentos/picaras.png' },
            { name: 'Confiteria 10', image: 'img/alimentos/casino.png' },
            { name: 'Confiteria 11', image: 'img/alimentos/nik.png' },
            { name: 'Confiteria 12', image: 'img/alimentos/donapepa.png' },
        ],
        limpieza: [
            { name: 'Limpieza 1', image: 'img/alimentos/mrmusculo.png' },
            { name: 'Limpieza 2', image: 'img/alimentos/ayudinliquido.png' },
            { name: 'Limpieza 3', image: 'img/alimentos/pato.png' },
            { name: 'Limpieza 4', image: 'img/alimentos/aceloace.png' },
            { name: 'Limpieza 5', image: 'img/alimentos/aceloace.png' },
            { name: 'Limpieza 6', image: 'img/alimentos/pato.png' },
            { name: 'Limpieza 7', image: 'img/alimentos/ayudinliquido.png' },
            { name: 'Limpieza 8', image: 'img/alimentos/mrmusculo.png' },
            { name: 'Limpieza 9', image: 'img/alimentos/mrmusculo.png' },
            { name: 'Limpieza 10', image: 'img/alimentos/ayudinliquido.png' },
            { name: 'Limpieza 11', image: 'img/alimentos/pato.png' },
            { name: 'Limpieza 12', image: 'img/alimentos/aceloace.png' },
        ]
        };
    
function displayProducts(category) {
const productList = document.getElementById('product-list');
productList.innerHTML = '';
    
    if (products[category]) {
        products[category].forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <label>${product.name}</label>
        `;
        productList.appendChild(productDiv);
        });
    }
    }
    
    document.querySelectorAll('.alimentos-item').forEach(item => {
    item.addEventListener('click', function () {
        const category = this.getAttribute('data-category');
        displayProducts(category);
    });
    });
    });
    