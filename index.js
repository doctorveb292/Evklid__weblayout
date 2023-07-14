// Burger 

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menulinks = menu.querySelectorAll('.nav-link');

burger.addEventListener('click',

function() {

  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

menulinks.forEach(function(el) {
  el.addEventListener('click', function(){
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

// Tabs

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work-list-link').forEach(function (e) {
      e.addEventListener('click', function (e) {
          const tab = e.currentTarget.dataset.path;
          document.querySelectorAll('.tab-content').forEach(function (e) {
              e.classList.remove('tab-content--active')
              document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
          });
      });
  });

  let tabsBtn = document.querySelectorAll('.work-list-link');
  tabsBtn.forEach((element) => {
      element.addEventListener('click', (e) => {
        const path = e.currentTarget.dataset.path;
    
        tabsBtn.forEach((btn) => {
          btn.classList.remove('work-list-link--active')
        });
        e.currentTarget.classList.add('work-list-link--active');
     });
});
});


// search-btn

let search = document.querySelector('.search-btn');
let searchInput = document.querySelector('.search-btn-input');

search.addEventListener('click',() => {
  searchInput.classList.toggle('search-btn-input--active');
});

let closed = document.querySelector('.search-btn-closed');
closed.addEventListener('click', () => {
  searchInput.classList.remove('search-btn-input--active');
});

// SLider 


const container = document.querySelector(".container")
const swiper = new Swiper('.hero-swiper', {
  
  pagination: {
    el: '.hero-pagination',
    type: 'bullets',
    clickable: true
  },

  autoplay: {
    delay: 3500,
  },

  loop: true,

  allowTouchMove: true,
});

// Accordion 

new Accordion ('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion-control',
  panelClass: 'accordion-content',
  activeClass: 'accordion--active'
});