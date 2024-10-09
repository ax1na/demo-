const main = document.getElementById('main');
const alert = document.getElementById('alert');
const alertClose = document.getElementById('alertClose');
const cartAlert = document.getElementById('cartAlert');
const cartAlertActive = document.getElementById('nav-cart');
const cartAlertClose = document.getElementById('cartAlertClose');

window.onload = function() {
    window.scrollTo(0, 0);
};

window.addEventListener('load', function(){
    main.style.animation = 'entry 2s ease-in-out 0s 1 normal forwards'
    alert.style.animation = 'entry-2 2s ease-in-out 0s 1 normal forwards'
})

alertClose.addEventListener('click', function(){
    alert.style.display = 'none'
})

cartAlertActive.addEventListener('click', function(){
    cartAlert.style.display = 'flex'
    cartAlert.style.animation = 'entry-3 1s ease-in-out 0s 1 normal forwards'
})

cartAlertClose.addEventListener('click', function(){
    cartAlert.style.display = 'none'
})

