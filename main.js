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

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link; //target에있는 데이터셋에있는 링크
  if (link == null) {
    return;
  }
  console.log(event.target.dataset.link); //dataset안에 -가 link 이기때문에 -link붙임 dataset안에 우리가정의한 변수가 할당됨
  const elmnt = document.querySelector(link);
  elmnt.scrollIntoView({behavior: 'smooth'});
});
