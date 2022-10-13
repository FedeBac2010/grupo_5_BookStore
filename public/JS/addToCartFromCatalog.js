window.addEventListener("load", (e) => {
    const addProductButtons = document.querySelectorAll("#addToCart");
   addProductButtons.forEach(addToCartButton =>{
    addToCartButton.addEventListener('click', addToCartClicked);
   });
function addToCartClicked(event){
    const button= event.target;
    const item= button.closest('.article');

    console.log(item);
}


});