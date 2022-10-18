window.addEventListener("load", (e) => {
    const addProductButton = document.querySelector("#btn-buy");

// Los valores de nuestra etiqueta del detalle-producto.
const productTitle = document.querySelector("h3").innerText;
const productPrice = document.querySelector("#bookPrice").innerHTML;
const productImage = document.querySelector("#imgBook").getAttribute("src");
// aca esta como guardar el id del producto
let url = window.location.href.split("/");
let id = url[url.length - 1];

  // funcion que se va a ejecutar al momento de hacer click en agregar Producto
  addProductButton.addEventListener("click", (e) => {
    // prevenimos que se recargue la pagina
    //e.preventDefault();
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
        //le agregamos el nuevo producto
        shoppingList.push(newProduct);
        precioCarrito.push(newProduct.price);
        // seteamos el LS con el nuevo valor del array.
        localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
        //seteamos el precio del primer producto agregado
        localStorage.setItem("shoppingPrice", JSON.stringify(precioCarrito));
        // alert que indica que el producto se agrego.
        alert(`Nuevo libro: ${newProduct.title} agregado al carrito`);
      }
   
      else{
        //leemos el array desde localStorage ya con contenido.
        let shoppingList = JSON.parse(localStorage.shoppingList);
        let shoppingPrice = JSON.parse(localStorage.shoppingPrice);


        /* let search =shoppingList.findIndex((x)=> x.id == newProduct.id);
        //Intento de hacer que lea si el producto esta repetido en el carrito 
        if(search != -1) 
       {       
         
        alert(` ${newProduct.title} ya está en el carrito`);
         return
       } else {  */

        // pusheamos el nuevo producto
        shoppingList.push(newProduct);
        shoppingPrice.push(newProduct.price);
        //basket.push(newBasket);
        // volvemos a setear el LS con el nuevo array.
        localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
        localStorage.setItem("shoppingPrice", JSON.stringify(shoppingPrice));
        //ejecutamos el alert de que se agrego el nuevo producto
        alert(`Agregaste un nuevo libro: ${newProduct.title} al carrito`);
       };
      //};
 
  };
});