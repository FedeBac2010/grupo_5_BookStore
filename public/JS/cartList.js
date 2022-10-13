window.addEventListener("load", (e) => {
    const productContainer = document.querySelector(".products");
    const priceContainer = document.querySelector(".product-price");
    const totalPriceContainer =document.querySelector(".cart-total");
    const initialValue = 0;

    // si no hay valores en LS, decimos que esta vacio

    if (!localStorage.getItem("shoppingList") || localStorage.getItem("shoppingList") === []) {
        productContainer.innerHTML += "<h3>El carrito esta vacio</h3>";
        // y el precio es 0, dado que no hay productos
        priceContainer.innerHTML += `<h4> TOTAL: $${initialValue} </h4>`;
    }

    // leemos el LS y si hay contenido...
    if (localStorage.getItem("shoppingList")) {
        const products = JSON.parse(localStorage.shoppingList);

    // recorremos el array de productos y devolvemos la data
        products.forEach((product) => {
    // creamos un div con los valores del producto
            productContainer.innerHTML += `
            <div class="product">
            <img src="${product.image}" alt="">  
            <div class="product-info">
        <h3 class="product-name">${product.title}</h3>
        <h4 class="product-price">${product.price}</h4>
        <p class="product-quantity">Cant: <input value="1" name="">
        <p class="product-remove">
            <i class="fa-solid fa-trash-can"></i>
            <button class='delete-btn' data-id='${product.id}'>Borrar</button>
        </p>
        </div>
        </div> 
      `;
        });

        // seleccionamos todos los botones del array de prods.
        const deleteProductButton = document.querySelectorAll(".delete-btn");

        // recorremos el querySelector all que devuelve un array
        deleteProductButton.forEach((button, i) => {
            
            button.addEventListener("click", (e) => {
                const shoppingList = JSON.parse(localStorage.shoppingList);
                
                const filteredProduct = shoppingList.filter((prod) => {
                  
                    return prod.id != shoppingList[i].id;
                });
                let productsPrice = [];
                filteredProduct.forEach((e) => productsPrice.push(e.price));

           
                localStorage.setItem("shoppingList", JSON.stringify(filteredProduct));
                localStorage.setItem("shoppingPrice", JSON.stringify(productsPrice));
                location.reload();

                
            });
        });
    }

    if (localStorage.getItem("shoppingPrice")) {
        const price = JSON.parse(localStorage.shoppingPrice);

        const sumWithInitial = price.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

        console.log(sumWithInitial);
        totalPriceContainer.innerHTML += `
        <p>
        <span>Precio Total</span>
        <span>$${sumWithInitial}</span>
    </p>
    <p>
        <span>Numero de items</span>
        <span></span>
    </p>
    
    <i class="fa-solid fa-trash-can"></i>
    <button id="reset-cart">Limpiar</button>
    
    <a href="">Proceder al Checkout</a>

    
    `;

        //funcionalidad limpiar Carrito despues de que aparezca el boton y dentro del if para evitar errores.
        const resetCart = document.querySelector("#reset-cart");

        resetCart.addEventListener("click", () => {
            localStorage.removeItem("shoppingPrice");
            localStorage.removeItem("shoppingList");
            location.reload();
        });
    }
});


