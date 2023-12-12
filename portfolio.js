// let hamberger = document.querySelector('.hamberger');
// let times = document.querySelector('.times');
// let mobileNav = document.querySelector('.mobile-nav');

// hamberger.addEventListener('click', function()){
// mobileNav.classList.add('open')
// }

// times.addEventListener('click', function()){

// }

// alert('saim')

// let hamberger = 'hamberger'
// if(hamberger){
//     console.log('mobile-nav')
// }

// function togglemobilemenu(menu){
//     menu.classList.toggle('times');
// }

// const navbar =document.querySelector('fa-bars-staggered');
// const phone =document.querySelector('mobile-items');

// navbar.addEventListener(click, ()=>{
//     phone.classList.toggle('active');
// })

const mobileNav = document.querySelector('.mobile-nav i');
const navOps = document.querySelector('.nav-ops');

mobileNav.addEventListener('click', ()=>{
    navOps.classList.toggle('active');
})