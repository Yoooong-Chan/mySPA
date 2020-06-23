'use strict';

//Make navbar transparent when it on the top
const navbar = document.querySelector('#navbar'); //elemnet요소 받아오기
const navbarHeight = navbar.getBoundingClientRect().height;

const home = document.querySelector('.home__container');
const about = document.querySelector('.about__container');
const skills = document.querySelector('#skills');
const work = document.querySelector('#work');
const testimonials = document.querySelector('#testimonials');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link; //target에있는 데이터셋에있는 링크
  if (link == null) {
    return;
  }
  scrollIntoView(link); //dataset안에 -가 link 이기때문에 -link붙임 dataset안에 우리가정의한 변수가 할당됨
});

const contactMe = document.querySelector('.home__button'); //data-link하고 싶은곳을 불러옴
contactMe.addEventListener('click', () => {
  //click(이 되면) 우리가 정의한 함수를 호출할수있도록함
  const target = event.target; //타겟은 event.target 즉, 타겟은  home__button
  const link = target.dataset.link; // home__button에 data-link = link 할당됨
  if (link == null) {
    return; // 만약 링크가 다른곳에 이상한곳에 클릭되면 널이되어 작동x
  }
  // home__button에 있는  data-link 콘솔창에 나타냄
  scrollIntoView('#contact'); // link를 스무스하게 작동시킴
});

function scrollIntoView(selector) {
  //selector를 주면 그 seclector에 맞는 요소를 찾은다음 스무스하게 이동하는 함수를 만듬
  const smooth = document.querySelector(selector);
  smooth.scrollIntoView({behavior: 'smooth'});
}
