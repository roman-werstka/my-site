// Swiper-slider===================================================================================
const swiper = new Swiper('.swiper', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Autoplay
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
});

// Tabs==============================================================================================
let tabsBtn = document.querySelectorAll('.how__btn');
let tabsItem = document.querySelectorAll('.how-tabs__item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('how__btn--active') });
    e.currentTarget.classList.add('how__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('how-tabs__item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('how-tabs__item--active');
  });
});

// Accordion==========================================================================================
new Accordion('.accordion');

// Burger menu========================================================================================
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
  // Закрытие Search при открывании Burger menu
  document.querySelector('.header__search').classList.remove('header__search--active');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})

// Search================================================================================================
let search = document.querySelector('.header__search');
let searchBtn = document.querySelector('.btn-search');
let searchClosed = document.querySelector('.closed-search');

searchBtn.addEventListener('click', function () {
  search.classList.add('header__search--active');
  // Закрытие Burger menu при открывание Search
  burger.classList.remove('burger--active');
  menu.classList.remove('header__nav--active');
  document.body.classList.remove('stop-scroll');
})

searchClosed.addEventListener('click', function () {
  search.classList.remove('header__search--active');
})
