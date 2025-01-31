// let cartCount = document.querySelector("#main-cart");
// let cartTab = document.querySelector(".cartTab");
// let cartItemsContainer = document.querySelector(".listCart");
// let totalBillElement = document.querySelector("#total-bill-num");
// let modal = document.getElementById("cart-modal");
// let btnOpenModal = document.getElementById("form-add-cart");
// let btnCloseModal = document.querySelector(".close-btn");
// let cartForm = document.getElementById("add-cart-form");
// let productSection = document.querySelector(".carts");

// let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
// let products = JSON.parse(localStorage.getItem("products")) || [];

// cartCount.setAttribute("data-content", cartItems.length);

// function updateCartModal() {
//     if (!cartItemsContainer || !totalBillElement) {
//         console.error("Cart elements are missing in the DOM");
//         return;
//     }

//     cartItemsContainer.innerHTML = ""; // Clear the container

//     // Calculate total bill
//     let totalBill = 0;

//     cartItems.forEach((item, index) => {
//         let itemHTML = `
//             <div class="cart-item">
//                 <div class="list">
//                     <div class="img-container">
//                         <img src="${item.image}" alt="${item.name}" title="${item.name}" width="100%">
//                     </div>
//                     <div class="text-area">
//                         <p>${item.name}</p>
//                     </div>
//                     <button class="dec-btn" data-index="${index}">-</button>
//                     <span class="inc-dec-num">${item.quantity}</span>
//                     <button class="inc-btn" data-index="${index}">+</button>
//                     <div class="text-area">
//                         <p>₹${item.price}</p>
//                     </div>                    
//                 </div>
//                 <div class="btn">
//                     <button class="remove-from-cart" data-index="${index}">Remove</button>
//                     <button class="buy-now" data-index="${index}">Buy Now</button>
//                 </div>
//             </div>
//         `;
//         cartItemsContainer.innerHTML += itemHTML; // Add new item to the cart modal
//         totalBill += item.price * item.quantity; // Update total bill
//     });

//     if (totalBillElement) {
//         totalBillElement.textContent = `₹${totalBill}`; // Update total bill in the modal
//     }

//     // Reattach event listeners after update
//     attachEventListeners();
// }

// function updateProductSection() {
//     productSection.innerHTML = `
//         <h3 id="Clothe">Product  Item <i class="ri-arrow-right-line"></i></h3>
//         <div class="clothes-men row"></div>
//     `;

//     products.forEach((product, index) => {
//         let productHTML = `
//             <div class="cart-item">
//                 <div class="img-container">
//                     <img src="${product.image}" alt="${product.name}" title="${product.name}">
//                 </div>
//                 <div class="text-area">
//                     <p>${product.name}</p>
//                     <p>₹${product.price}</p>
//                 </div>
//                 <div class="btn">
//                     <button class="add-to-cart" data-index="${index}">Add To Cart</button>
//                     <button class="delete-product" data-index="${index}">Delete</button>
//                     <button class="edit-product" data-index="${index}">Edit</button>
//                 </div>
//             </div>
//         `;
//         document.querySelector(".clothes-men.row").innerHTML += productHTML;
//     });

//     attachProductEventListeners();
// }

// function attachEventListeners() {
//     // Attach remove item functionality
//     document.querySelectorAll(".remove-from-cart").forEach(button => {
//         button.onclick = function (e) {
//             let itemIndex = parseInt(e.target.getAttribute("data-index"), 10);
//             cartItems.splice(itemIndex, 1);
//             localStorage.setItem("cartItems", JSON.stringify(cartItems));
//             cartCount.setAttribute("data-content", cartItems.length);
//             updateCartModal(); // Refresh cart modal after removal
//         };
//     });

//     // Attach increase item functionality
//     document.querySelectorAll(".inc-btn").forEach(button => {
//         button.onclick = function (e) {
//             let itemIndex = parseInt(e.target.getAttribute("data-index"), 10);
//             cartItems[itemIndex].quantity += 1;
//             localStorage.setItem("cartItems", JSON.stringify(cartItems));
//             cartCount.setAttribute("data-content", cartItems.length);
//             updateCartModal(); // Refresh cart modal after increase
//         };
//     });

//     // Attach decrease item functionality
//     document.querySelectorAll(".dec-btn").forEach(button => {
//         button.onclick = function (e) {
//             let itemIndex = parseInt(e.target.getAttribute("data-index"), 10);
//             if (cartItems[itemIndex].quantity > 1) {
//                 cartItems[itemIndex].quantity -= 1;
//                 localStorage.setItem("cartItems", JSON.stringify(cartItems));
//                 cartCount.setAttribute("data-content", cartItems.length);
//                 updateCartModal(); // Refresh cart modal after decrease
//             }
//         };
//     });

//     // Attach buy now functionality
//     document.querySelectorAll(".buy-now").forEach(button => {
//         button.onclick = function (e) {
//             let itemIndex = parseInt(e.target.getAttribute("data-index"), 10);
//             let item = cartItems[itemIndex];
//             alert(`Your order for ${item.name} has been successfully placed.`);
//             cartItems.splice(itemIndex, 1);
//             localStorage.setItem("cartItems", JSON.stringify(cartItems));
//             cartCount.setAttribute("data-content", cartItems.length);
//             updateCartModal(); // Refresh cart modal after purchase
//         };
//     });
// }

// function attachProductEventListeners() {
//     document.querySelectorAll(".add-to-cart").forEach(button => {
//         button.onclick = function (e) {
//             let itemIndex = parseInt(e.target.getAttribute("data-index"), 10);
//             let product = products[itemIndex];
//             let existingItem = cartItems.find(item => item.name === product.name);
//             if (existingItem) {
//                 existingItem.quantity += 1;
//             } else {
//                 cartItems.push({ ...product, quantity: 1 });
//             }
//             localStorage.setItem("cartItems", JSON.stringify(cartItems));
//             cartCount.setAttribute("data-content", cartItems.length);
//             updateCartModal();
//         };
//     });

//     document.querySelectorAll(".delete-product").forEach(button => {
//         button.onclick = function (e) {
//             let itemIndex = parseInt(e.target.getAttribute("data-index"), 10);
//             products.splice(itemIndex, 1);
//             localStorage.setItem("products", JSON.stringify(products));
//             updateProductSection();
//         };
//     });

//     document.querySelectorAll(".edit-product").forEach(button => {
//         button.onclick = function (e) {
//             let itemIndex = parseInt(e.target.getAttribute("data-index"), 10);
//             let product = products[itemIndex];
//             document.getElementById("cart-item-name").value = product.name;
//             document.getElementById("cart-item-price").value = product.price;
//             document.getElementById("cart-item-quantity").value = 1;
//             document.getElementById("cart-item-image-url").value = product.image;
//             document.getElementById("preview-img").src = product.image;
//             document.getElementById("image-preview").style.display = "block";
//             cartForm.setAttribute("data-edit-index", itemIndex);
//             modal.style.display = "block";
//         };
//     });
// }

// cartForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     let itemName = document.getElementById("cart-item-name").value;
//     let itemPrice = parseFloat(document.getElementById("cart-item-price").value);
//     let itemQuantity = parseInt(document.getElementById("cart-item-quantity").value);
//     let itemImage = document.getElementById("cart-item-image-url").value;

//     let editIndex = cartForm.getAttribute("data-edit-index");

//     if (editIndex !== null && editIndex !== "") {
//         products[parseInt(editIndex, 10)] = { name: itemName, price: itemPrice, image: itemImage };
//         cartForm.removeAttribute("data-edit-index");
//     } else {
//         products.push({ name: itemName, price: itemPrice, image: itemImage });
//     }

//     localStorage.setItem("products", JSON.stringify(products));
//     updateProductSection();
//     modal.style.display = "none";
//     cartForm.reset();
//     document.getElementById("image-preview").style.display = "none";
// });

// btnOpenModal.addEventListener("click", function () {
//     cartForm.reset();
//     cartForm.removeAttribute("data-edit-index");
//     document.getElementById("image-preview").style.display = "none";
//     modal.style.display = "block";
// });

// btnCloseModal.addEventListener("click", function () {
//     cartForm.removeAttribute("data-edit-index");
//     modal.style.display = "none";
// });

// cartCount.addEventListener("click", () => {
//     cartTab.classList.toggle("active");
// });

// document.querySelector(".close").addEventListener("click", () => {
//     cartTab.classList.remove("active");
// });

// window.addEventListener("load", () => {
//     updateCartModal();
//     updateProductSection();
// });



let cartCount = document.querySelector("#main-cart");
let cartTab = document.querySelector(".cartTab");
let cartItemsContainer = document.querySelector(".listCart");
let totalBillElement = document.querySelector("#total-bill-num");
let modal = document.getElementById("cart-modal");
let btnOpenModal = document.getElementById("form-add-cart");
let btnCloseModal = document.querySelector(".close-btn");
let cartForm = document.getElementById("add-cart-form");
let productSection = document.querySelector(".carts");

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

cartCount.setAttribute("data-content", cartItems.length);

function updateCartModal() {
    if (!cartItemsContainer || !totalBillElement) {
        console.error("Cart elements are missing in the DOM");
        return;
    }

    cartItemsContainer.innerHTML = "";
    let totalBill = 0;

    cartItems.forEach((item, index) => {
        let itemHTML = `
            <div class="cart-item">
                <div class="list">
                    <div class="img-container">
                        <img src="${item.image}" alt="${item.name}" title="${item.name}" width="100%">
                    </div>
                    <div class="text-area">
                        <p>${item.name}</p>
                    </div>
                    <button class="dec-btn" data-index="${index}">-</button>
                    <span class="inc-dec-num">${item.quantity}</span>
                    <button class="inc-btn" data-index="${index}">+</button>
                    <div class="text-area">
                        <p>₹${item.price}</p>
                    </div>                    
                </div>
                <div class="btn">
                    <button class="remove-from-cart" data-index="${index}">Remove</button>
                    <button class="buy-now" data-index="${index}">Buy Now</button>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += itemHTML;
        totalBill += item.price * item.quantity;
    });

    if (totalBillElement) {
        totalBillElement.textContent = `₹${totalBill}`;
    }

    attachEventListeners();
}

function updateProductSection() {
    productSection.innerHTML = `
        <h3 id="Clothe">Product  Item <i class="ri-arrow-right-line"></i></h3>
        <div class="clothes-men row"></div>
    `;

    products.forEach((product, index) => {
        let productHTML = `
            <div class="cart-item">
                <div class="img-container">
                    <img src="${product.image}" alt="${product.name}" title="${product.name}">
                </div>
                <div class="text-area">
                    <p>${product.name}</p>
                    <p>₹${product.price}</p>
                </div>
                <div class="btn">
                    <button class="add-to-cart" data-index="${index}">Add To Cart</button>
                    <button class="delete-product" data-index="${index}">Delete</button>
                    <button class="edit-product" data-index="${index}">Edit</button>
                </div>
            </div>
        `;
        document.querySelector(".clothes-men.row").innerHTML += productHTML;
    });

    attachProductEventListeners();
}

function attachEventListeners() {
    document.querySelectorAll(".remove-from-cart").forEach(button => {
        button.onclick = function (e) {
            let itemIndex = parseInt(e.target.getAttribute("data-index"), 10);
            cartItems.splice(itemIndex, 1);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            cartCount.setAttribute("data-content", cartItems.length);
            updateCartModal();
        };
    });

    document.querySelectorAll(".inc-btn").forEach(button => {
        button.onclick = function (e) {
            let itemIndex = parseInt(e.target.getAttribute("data-index"), 10);
            cartItems[itemIndex].quantity += 1;
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            cartCount.setAttribute("data-content", cartItems.length);
            updateCartModal();
        };
    });

    document.querySelectorAll(".dec-btn").forEach(button => {
        button.onclick = function (e) {
            let itemIndex = parseInt(e.target.getAttribute("data-index"), 10);
            if (cartItems[itemIndex].quantity > 1) {
                cartItems[itemIndex].quantity -= 1;
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                cartCount.setAttribute("data-content", cartItems.length);
                updateCartModal();
            }
        };
    });

    document.querySelectorAll(".buy-now").forEach(button => {
        button.onclick = function (e) {
            let itemIndex = parseInt(e.target.getAttribute("data-index"), 10);
            let item = cartItems[itemIndex];
            alert(`Your order for ${item.name} has been successfully placed.`);
            cartItems.splice(itemIndex, 1);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            cartCount.setAttribute("data-content", cartItems.length);
            updateCartModal();
        };
    });
}

function attachProductEventListeners() {
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.onclick = function (e) {
            let itemIndex = parseInt(e.target.getAttribute("data-index"), 10);
            let product = products[itemIndex];
            let existingItem = cartItems.find(item => item.name === product.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartItems.push({ ...product, quantity: 1 });
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            cartCount.setAttribute("data-content", cartItems.length);
            updateCartModal();
        };
    });

    document.querySelectorAll(".delete-product").forEach(button => {
        button.onclick = function (e) {
            let itemIndex = parseInt(e.target.getAttribute("data-index"), 10);
            products.splice(itemIndex, 1);
            localStorage.setItem("products", JSON.stringify(products));
            updateProductSection();
        };
    });

    document.querySelectorAll(".edit-product").forEach(button => {
        button.onclick = function (e) {
            let itemIndex = parseInt(e.target.getAttribute("data-index"), 10);
            let product = products[itemIndex];
            document.getElementById("cart-item-name").value = product.name;
            document.getElementById("cart-item-price").value = product.price;
            document.getElementById("cart-item-quantity").value = 1;
            document.getElementById("cart-item-image-url").value = product.image;
            document.getElementById("preview-img").src = product.image;
            document.getElementById("image-preview").style.display = "block";
            cartForm.setAttribute("data-edit-index", itemIndex);
            modal.style.display = "block";
        };
    });
}

cartForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let itemName = document.getElementById("cart-item-name").value;
    let itemPrice = parseFloat(document.getElementById("cart-item-price").value);
    let itemQuantity = parseInt(document.getElementById("cart-item-quantity").value);
    let itemImage = document.getElementById("cart-item-image-url").value;

    let editIndex = cartForm.getAttribute("data-edit-index");

    if (editIndex !== null && editIndex !== "") {
        products[parseInt(editIndex, 10)] = { name: itemName, price: itemPrice, image: itemImage };
        let existingCartItem = cartItems.find(item => item.name === products[parseInt(editIndex, 10)].name);
        if (existingCartItem) {
            existingCartItem.name = itemName;
            existingCartItem.price = itemPrice;
            existingCartItem.image = itemImage;
        }
        cartForm.removeAttribute("data-edit-index");
    } else {
        products.push({ name: itemName, price: itemPrice, image: itemImage });
        cartItems.push({ name: itemName, price: itemPrice, image: itemImage, quantity: 1 });
    }

    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateProductSection();
    updateCartModal();

    modal.style.display = "none";
    cartForm.reset();
    document.getElementById("image-preview").style.display = "none";
});

btnOpenModal.addEventListener("click", function () {
    cartForm.reset();
    cartForm.removeAttribute("data-edit-index");
    document.getElementById("image-preview").style.display = "none";
    modal.style.display = "block";
});

btnCloseModal.addEventListener("click", function () {
    cartForm.removeAttribute("data-edit-index");
    modal.style.display = "none";
});

cartCount.addEventListener("click", () => {
    cartTab.classList.toggle("active");
});

document.querySelector(".close").addEventListener("click", () => {
    cartTab.classList.remove("active");
});

window.addEventListener("load", () => {
    updateCartModal();
    updateProductSection();
});
