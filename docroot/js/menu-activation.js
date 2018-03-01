document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const navToggleElement = document.querySelector('.main-header-nav-toggle');
  const menuToggleOffClick = document.querySelectorAll('.menu-toggle');

  navToggleElement.addEventListener('click',  () => {
    document.body.classList.toggle('menu-open');
  });

  menuToggleOffClick.forEach((element) => {
    element.addEventListener('click', function () {
      document.body.classList.remove('menu-open');
    });
  });
});
