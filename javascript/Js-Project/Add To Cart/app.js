let addToCartButtons = document.querySelectorAll(".add-to-cart");
let cartCount = document.querySelector("#main-cart");
let cartTab = document.querySelector(".cartTab");
let cartItemsContainer = document.querySelector(".listCart");

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

cartCount.setAttribute('data-content', cartItems.length);

function updateCartModal() {
    cartItemsContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        let itemHTML = `
            <div class="cart-item">
                <div class="list">
                    <div class="img-container" width="80px">
                        <img src="${item.image}" alt="${item.name}" title="${item.name}" width="100%">
                    </div>
                    <div class="text-area">
                        <p>${item.name}</p>
                        <p>${item.price}</p>
                    </div>
                </div>
                <div class="btn">
                    <button class="remove-from-cart" data-index="${index}">Remove</button>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += itemHTML;
    });

    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            let itemIndex = e.target.getAttribute('data-index');
            cartItems.splice(itemIndex, 1);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            cartCount.setAttribute('data-content', cartItems.length);
            updateCartModal();
        });
    });
}

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        let cartItem = button.closest('.cart-item');
        let item = {
            name: cartItem.querySelector('.text-area p:first-child').innerHTML,
            price: cartItem.querySelector('.text-area p:nth-child(2)').innerHTML,
            image: cartItem.querySelector('img').src
        };

        cartItems.push(item);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        cartCount.setAttribute('data-content', cartItems.length);
        updateCartModal();
    });
});

cartCount.addEventListener('click', () => {
    cartTab.classList.toggle("active");
});

document.querySelector(".close").addEventListener("click", () => {
    cartTab.classList.remove("active");
});

window.addEventListener('load', () => {
    updateCartModal();
});