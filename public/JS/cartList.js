window.addEventListener("load", (e) => {
    const productContainer = document.querySelector(".products");
    const priceContainer = document.querySelector(".product-price");
    const totalPriceContainer =document.querySelector(".cart-total");
    const initialValue = 0;
    
    // si no hay valores en LS, decimos que esta vacio

    if (!localStorage.getItem("shoppingList") || localStorage.getItem("shoppingList") === []) {
        productContainer.innerHTML += "<h3>El carrito esta vacio</h3>";
        // y el precio es 0, dado que no hay productos
        totalPriceContainer.innerHTML += `
        <p>
        <span>Precio Total</span>
        <span>$${initialValue}</span>
    </p>
    <p>
        <span>Numero de items</span>
        <span>0</span>
    </p>
    
    <a href="/products/catalog.ejs">Agregar Productos</a>
    `;
    }

    // leemos el LS y si hay contenido...
    if (localStorage.getItem("shoppingList")) {
        const products = JSON.parse(localStorage.shoppingList);
        let basket= JSON.parse(localStorage.basket);
    // recorremos el array de productos y devolvemos la data
        products.map((product) => {
            let {title, price, image, id} = product;
            let search = basket.find((y) => y.id === id) || []
    // creamos un div con los valores del producto
    

            productContainer.innerHTML += `
            <div class="product">
            <img src="${image}" alt="">  
            <div class="product-info">
        <h3 class="product-name">${title}</h3>
        <h4 class="product-price">$ ${price}</h4>
          
        <div class="quantity-btn">
           <p class="product-quantity">Cant: </p>
           <i data-id="${search.id}" class="fa fa-minus-square decrement" aria-hidden="true"></i>
            <div id="${search.id}" class="quantity">${search.item}</div>
            <i onclick='increment(${id})' class="fa fa-plus-square " aria-hidden="true"></i>
        </div>
        <h3 class="total">Total $ ${price}</h3>
            <p class="product-remove">
            <i class="fa-solid fa-trash-can"></i>
            <button class='delete-btn' data-id='${id}'>Borrar</button>
        </p>
        </div>
        </div> 
      `;
        });

 // funcines para aumentar o disminuir la cantidad de productos 
function increment(id){
    let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};




/* let increment = document.querySelectorAll(".increment");            
    increment.forEach((increment, id) => {
    increment.addEventListener("click", (e) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
   consolelog(search);
    if (search === undefined) {
      basket.push({
        id: selectedItem.id,
        item: 1,
      });
    } else {
      search.item += 1;
    }
  
    console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("basket", JSON.stringify(basket));
  }) ;*/
    
  /** decrement = (id) => {
    let selectedItem = product.id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
      search.item -= 1;
    };

    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
  };
  
 
   // Actualizar la cantidad de cada Producto
  

  let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
  };
*/
  let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();
  
 


        // seleccionamos todos los botones del array de prods.
        const deleteProductButton = document.querySelectorAll(".delete-btn");

        // recorremos el querySelector all que devuelve un array
        deleteProductButton.forEach((button, i) => {
            
            button.addEventListener("click", (e) => {
                const shoppingList = JSON.parse(localStorage.shoppingList);
                
                const filteredProduct = shoppingList.filter((product) => {
                  
                    return product.id != shoppingList[i].id;
                });
               /*  const basket =JSON.parse(localStorage.basket);
                const filteredBasket = basket.filter((basket) => {
                    return basket.id != basket[i].id;
                }); */
                let productsPrice = [];
                filteredProduct.forEach((e) => productsPrice.push(e.price));
                

                localStorage.setItem("shoppingList", JSON.stringify(filteredProduct));
                localStorage.setItem("shoppingPrice", JSON.stringify(productsPrice));
                // localStorage.setItem("basket", JSON.stringify(filteredBasket));
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
        <span id="TotalItems"></span>
    </p>
    <div class="reset-cart">
    <i class="fa-solid fa-trash-can"></i>
    <button  id="reset-cart">Eliminar Carrito</button>
    </div>
    <a href="">Proceder al Checkout</a>

    
    `;

        //funcionalidad limpiar Carrito despues de que aparezca el boton y dentro del if para evitar errores.
        const resetCart = document.querySelector("#reset-cart");

        resetCart.addEventListener("click", () => {
            localStorage.removeItem("shoppingPrice");
            localStorage.removeItem("shoppingList");
            localStorage.removeItem("basket");
            location.reload();
        });
    }
});


