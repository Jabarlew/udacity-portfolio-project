document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const menuAnimation1 = document.querySelector('.animation-circle');
  const menuAnimation4 = document.querySelector('.menu-fixed-list');
  const navColor = document.querySelector('.fa-bars');
  const navToggleElement = document.querySelector('.main-header-nav-toggle');


  navToggleElement.addEventListener('click', function () {
    menuAnimation1.classList.toggle('animation-circle-off');
    menuAnimation4.classList.toggle('menu-fixed-list-off');
    navColor.classList.toggle('fa-bars-off');
  });
});
