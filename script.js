document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Jeans', price: 800.00, image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 2, name: 'Shirt', price: 600.00, image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 3, name: 'Hoddie', price: 1000.00, image: 'https://media.istockphoto.com/id/1296786631/photo/blank-white-hooded-sweatshirt-mockup-with-zipper-in-front-and-back-views.jpg?s=1024x1024&w=is&k=20&c=E4y1r6fAhjHoc-KeZgqJQU2JXBpjl1O-3PTcXRPMhlw=' }
    ];

    const cart = [];
    
    const productsContainer = document.getElementById('products');
    const cartContainer = document.getElementById('cart');
    const cartButton = document.getElementById('cart-button');
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');

    function renderProducts() {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price.toFixed(2)} rs</p>
                <button data-id="${product.id}">Add to Cart</button>
            `;
            productsContainer.appendChild(productElement);
        });
    }

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price;
            const cartItemElement = document.createElement('li');
            cartItemElement.textContent = `${item.name} - ${item.price.toFixed(2)} rs`;
            cartItems.appendChild(cartItemElement);
        });

        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = cart.length;
    }

    function toggleCart() {
        cartContainer.classList.toggle('hidden');
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            updateCart();
        }
    }

    productsContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const productId = parseInt(event.target.getAttribute('data-id'), 10);
            addToCart(productId);
        }
    });

    cartButton.addEventListener('click', toggleCart);

    checkoutButton.addEventListener('click', () => {
        alert('Thank you for your purchase!');
        cart.length = 0; // Clear the cart
        updateCart();
        toggleCart();
    });

    renderProducts();
});
