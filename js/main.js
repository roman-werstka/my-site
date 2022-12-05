$(function () {

    'use strict';

    $('#container').imagesLoaded(function () {

        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});

        });

        var $grid = $('.grid').isotope({
            // options options
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });


        // images have loaded

    });

    //Image Light Box Popup
    $('.image-link').magnificPopup({type:'image'});

    //Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

});

// tabs===================================
let tabsBtn = document.querySelectorAll('.portfolio__btn');
let tabsItem = document.querySelectorAll('.portfolio__card-item');
let tabsAll = document.querySelector(`[data-all="all"]`);

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('portfolio__btn--active') });
    e.currentTarget.classList.add('portfolio__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('portfolio__card-item--active') });
    document.querySelectorAll(`[data-target="${path}"]`).forEach(function (el) {
      el.classList.add('portfolio__card-item--active')
    });
  });
});

tabsAll.addEventListener('click', function (all) {
  tabsItem.forEach(function (a) {
    a.classList.add('portfolio__card-item--active')
  });
});


// ==========================
$('.counter').counterUp({
  delay: 10,
  time: 3000
});


// Burger menu========================================================================================
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');
  // Закрытие Search при открывании Burger menu
  // document.querySelector('.header__search').classList.remove('header__search--active');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})
