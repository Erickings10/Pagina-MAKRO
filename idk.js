document.addEventListener('DOMContentLoaded', function () {
    const products = {
        abarrotes: [
            { name: 'Abarrote 1', image: 'img/alimentos/atun.png' },
            { name: 'Abarrote 2', image: 'img/alimentos/mayonesa.png' },
            { name: 'Abarrote 3', image: 'img/alimentos/fideos.png' },
            { name: 'Abarrote 4', image: 'img/alimentos/mermelada.png' }
        ],
        bebidas: [
            { name: 'Bebida 1', image: 'img/alimentos/gaseosa.png' },
            { name: 'Bebida 2', image: 'img/alimentos/agua.png' },
            { name: 'Bebida 3', image: 'img/alimentos/johnnie.png' },
            { name: 'Bebida 4', image: 'img/alimentos/gatorade3.png' },
        ],
        lacteos: [
            { name: 'Lacteo 1', image: 'img/alimentos/Gloria.png' },
            { name: 'Lacteo 2', image: 'img/alimentos/condensada.png' },
            { name: 'Lacteo 3', image: 'img/alimentos/yogurt.png' },
            { name: 'Lacteo 4', image: 'img/alimentos/helado2.png' },
            { name: 'Abarrote 3', image: 'img/alimentos/fideos.png' },
            { name: 'Abarrote 4', image: 'img/alimentos/yogurt.png' },
            { name: 'Abarrote 3', image: 'img/alimentos/fideos.png' },
            { name: 'Abarrote 4', image: 'img/alimentos/yogurt.png' },
            { name: 'Abarrote 3', image: 'img/alimentos/fideos.png' },
            { name: 'Abarrote 4', image: 'img/alimentos/yogurt.png' },
            { name: 'Abarrote 3', image: 'img/alimentos/fideos.png' },
            { name: 'Abarrote 4', image: 'img/alimentos/yogurt.png' },
            { name: 'Abarrote 3', image: 'img/alimentos/fideos.png' },
            { name: 'Abarrote 4', image: 'img/alimentos/yogurt.png' }
        ],
        confiteria: [
            { name: 'Confiteria 1', image: 'img/alimentos/picaras.png' },
            { name: 'Confiteria 2', image: 'img/alimentos/casino.png' },
            { name: 'Confiteria 3', image: 'img/alimentos/nik.png' },
            { name: 'Confiteria 4', image: 'img/alimentos/donapepa.png' },
        ],
        limpieza: [
            { name: 'Limpieza 1', image: 'img/alimentos/mrmusculo.png' },
            { name: 'Limpieza 2', image: 'img/alimentos/blanc.png' },
            { name: 'Limpieza 3', image: 'img/alimentos/pato.png' },
            { name: 'Limpieza 4', image: 'img/alimentos/clorox.png' },

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
    