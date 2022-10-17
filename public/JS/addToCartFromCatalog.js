window.addEventListener("load", (e) => {
  const addProductButtons = document.querySelectorAll("#addToCart");

// Los valores de nuestra etiqueta del detalle-producto.
const productTitle = document.querySelector("h2.title").innerText;
const productPrice = document.querySelector("p.precio").innerHTML;
const productImage = document.querySelector("img.barra").getAttribute("src");
// aca esta como guardar el id del producto
let url = window.location.href.split("/");
let id = url[url.length - 1];





      addProductButtons.forEach(addToCartButton =>{
          addToCartButton.addEventListener('click', (e)=>{
              /* console.log(e.target.dataset.id) */
               // prevenimos que se recargue la pagina
                  e.preventDefault();
              //ejecutamos la funcion que contendra la logica de agregar un producto
                  addProductToList();
  });
  const addProductToList = () => {
      // creamos un objeto con los valores del producto que vamos a listar en el carrito
      let newProduct = {
        title: productTitle,
        price: parseInt(productPrice),
        image: productImage,
        id: id,
      };
      let newBasket ={
        id: id,
        item: 1,
      };
  
      // verificamos que el LocalStorage no tenga seteado nada.
      if (
          !localStorage.getItem("shoppingList") ||
          localStorage.shoppingList.length == 0
        ) {
          //creamos un array vacio donde se van a empezar a almacenar los prods.
          let shoppingList = [];
          let precioCarrito = [];
          let basket = [];
          //le agregamos el nuevo producto
          shoppingList.push(newProduct);
          precioCarrito.push(newProduct.price);
          basket.push(newBasket);
          // seteamos el LS con el nuevo valor del array.
          localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
          //seteamos el precio del primer producto agregado
          localStorage.setItem("shoppingPrice", JSON.stringify(precioCarrito));
          //seteamos un producto en cantidad
          localStorage.setItem("basket", JSON.stringify(basket));
          // alert que indica que el producto se agrego.
          alert(`agregaste ${newProduct.title} al carrito`);
        }
     
        else{
          //leemos el array desde localStorage ya con contenido.
          let shoppingList = JSON.parse(localStorage.shoppingList);
          let shoppingPrice = JSON.parse(localStorage.shoppingPrice);
          let basket = JSON.parse(localStorage.basket);
          let search =shoppingList.find((x)=> x.id === newProduct.id);
          //Intento de hacer que lea si el producto esta repetido en el carrito 
          if(search !== undefined) 
         {       
           alert(`El Producto ${newProduct.title} ya se encuentra en el carrito`);
           return
         } else {} 
          // pusheamos el nuevo producto
          shoppingList.push(newProduct);
          shoppingPrice.push(newProduct.price);
          /* basket.push(newBasketz); */
          // volvemos a setear el LS con el nuevo array.
          localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
          localStorage.setItem("shoppingPrice", JSON.stringify(shoppingPrice));
          localStorage.setItem("basket", JSON.stringify(basket));
          //ejecutamos el alert de que se agrego el nuevo producto
          alert(`agregaste ${newProduct.title} al carrito`);
         }
   
    };
  });



/* function addToCartClicked(event){
  const button= event.target;
  const item= button.closest('.article');

  console.log(item);
} */


});