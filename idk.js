document.addEventListener('DOMContentLoaded', function () {
    const products = {
        abarrotes: [
            { name: 'Abarrote 1', image: '' },
            { name: 'Abarrote 2', image: '' },
            { name: 'Abarrote 3', image: 'img/alimentos/queso.png' },
            { name: 'Abarrote 4', image: 'img/alimentos/yogurt.png' },
            { name: 'Abarrote 5', image: '' }
        ],
        bebidas: [
            { name: 'Bebida 1', image: 'img/products/bebida1.png' },
            { name: 'Bebida 2', image: 'img/products/bebida2.png' }
        ],
        lacteos: [
            { name: 'Lacteo 1', image: 'img/alimentos/Gloria.png' },
            { name: 'Lacteo 2', image: 'img/alimentos/condensada.png' },
            { name: 'Lacteo 3', image: 'img/alimentos/yogurt.png' },
            { name: 'Lacteo 4', image: 'img/alimentos/helado2.png' }
        ],
        confiteria: [
            { name: 'Confiteria 1', image: 'img/products/confiteria1.png' },
            { name: 'Confiteria 2', image: 'img/products/confiteria2.png' }
        ],
        limpieza: [
            { name: 'Limpieza 1', image: 'img/products/limpieza1.png' },
            { name: 'Limpieza 2', image: 'img/products/limpieza2.png' }
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
    