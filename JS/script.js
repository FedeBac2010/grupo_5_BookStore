searchForm= document.querySelector('.search-form');

document.querySelector ('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
};

ScrollReveal().reveal('.header');
ScrollReveal().reveal('.card-ebooks',{delay: 500});
ScrollReveal().reveal('.card-Impresos',{delay: 500});