(function(){
let burger  = document.querySelector('.hamburger');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');

let links = document.querySelectorAll('.overlay .menu__link'); 

links.forEach(function(element){
  element.addEventListener('click' , (e) => {
    e.preventDefault();
    toggleMenu();
  });
})

function toggleMenu(){
  burger.classList.toggle('hamburger--active');
  overlay.classList.toggle('overlay--active');
  body.classList.toggle('body--active-menu');
}

burger.addEventListener('click' , toggleMenu);
console.log(burger);

})()