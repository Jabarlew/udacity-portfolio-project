document.addEventListener('DOMContentLoaded', function () {
  'use strict';


  const menuAnimation1 = document.querySelector('.animation-circle');
  const menuAnimation4 = document.querySelector('.menu-fixed-list');
  const navIconChange = document.querySelector('.fa-bars');
  const navToggleElement = document.querySelector('.main-header-nav-toggle');
  const menuToggleOffClick = document.querySelectorAll(".menu-toggle");

  function menuOpenClose() {
    menuAnimation1.classList.toggle('animation-circle-off');
    menuAnimation4.classList.toggle('menu-fixed-list-off');
    navIconChange.classList.toggle('fa-bars-off',);
    navIconChange.classList.toggle('fa-times');
    navIconChange.classList.toggle('fa-bars');
  }

  navToggleElement.addEventListener('click', menuOpenClose);
  menuToggleOffClick.forEach(function (element) {
    element.addEventListener('click', menuOpenClose);
  });
});
