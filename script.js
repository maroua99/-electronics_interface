// Sample product data
const products = [
    { id: 1, name: 'Smart TV', price: 500 },
    { id: 2, name: 'Laptop', price: 800 },
    { id: 3, name: 'Smartphone', price: 300 }
];

// Function to display products
function displayProducts() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';

    products.forEach(product => {
        const productElem = document.createElement('div');
        productElem.classList.add('product');
        productElem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productElem);
    });
}

// Function to add items to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cartItems = document.getElementById('cart-items');
        const cartItem = document.createElement('li');
        cartItem.textContent = `${product.name} - $${product.price}`;
        cartItems.appendChild(cartItem);
    }
}

// Initialize
displayProducts();
