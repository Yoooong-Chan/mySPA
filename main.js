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

// Show 'arrow up' button when scrolling down
const arrowUp = document.querySelector('.arrow__up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

/*  Handle click on the "arrow up" button */
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

/* Projects  */
const workBtnContainer = document.querySelector('.work__category'); //카테고리안에 버튼
const projectContainer = document.querySelector('.work__projects'); //프로젝트s안에 프로젝트가 들어있음
const projects = document.querySelectorAll('.project'); //각각의 프로젝트들을 배열로 받아옴

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  projectContainer.classList.add('anim-out'); //anim 효과로 opacity가 0되면서 y축 40px ani효과줌

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    // => 삭제하고싶은것이 추가하고 싶은것보다 많을때 사용하면 효율적
    // 한마디로 * or filter가 누른것이 dataset과 같다면 none이 제거되어 보이게되고
    // * or filter가 누르지않은 것들은 none이되어 안보이게됨
    projectContainer.classList.remove('anim-out');
  }, 300);
});
// anim을 add한 이후에, setTimeout으로 인해서 코드가 끝난 이후, 0.3초후에 filter code & remove가 실행되므로,
// anim효과가 자연스러워진다. 만약 그렇지않다면, filter가 된이후에 0.3초후에 remove되어
// filter로 인해서 클릭한것들이 보여지고 난이후, 0.3초후에 없어지므로 anim효과가 부자연스럽다.about__majors
// 한마디로 1 => 1 / 6 => 6이 된다. 6 => 1이 아니라/
