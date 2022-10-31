
let services = document.querySelector('#services');
let myWorkButton = document.querySelector('#my-work');


window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i < reveals.length; i++){

        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 180;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        pagination: boolean = false,
        gap: '1em',
      } );
      
      splide.mount();
  } );

services.addEventListener('click', scrollFirst);

function scrollFirst(){
    let elem = document.querySelector('.second-section');
    elem.scrollIntoView({behavior: "smooth"});
}

myWorkButton.addEventListener('click', scrollTwo);

function scrollTwo(){
    let elem = document.querySelector('.third-section');
    elem.scrollIntoView({behavior: "smooth"});
}

let showOnPx = 100;
let backToTopButton = document.querySelector(".back-to-top")

let scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);

  function goToTop(){
    let goElem = document.querySelector('.first-section');
    goElem.scrollIntoView({behavior:"smooth"});
  };