window.addEventListener("load", (e) => {
const cartAmount = document.querySelector(".cartAmount");

cartAmount.innerText = productsInCart();

});
function productsInCart(){
    return localStorage.shoppingList ? JSON.parse(localStorage.shoppingList).length : 0
}
console.log(productsInCart());