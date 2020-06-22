'use strict';

//Make navbar transparent when it on the top
const navbar = document.querySelector('#navbar'); //elemnet요소 받아오기
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(`navbarHeight :${navbarHeight}`);
  if (window.scrollY > 20) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});
