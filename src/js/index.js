import '../scss/style.scss'
import Swiper, { Navigation, Pagination } from 'swiper'
import { doc } from 'prettier'
Swiper.use([Navigation, Pagination])


const brandswiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination'
  },

  slidesPerView: 'auto',

  spaceBetween: 16,
  loop: true,
  direction: 'horizontal'
})

const repairswiper = new Swiper('.repair--swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  slidesPerView: 'auto',

  spaceBetween: 16
})

const priceswiper = new Swiper('.price--swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  slidesPerView: 'auto',

  spaceBetween: 16
})


const burger = document.getElementsByClassName('icon-call__burger')[0]
const sidebar = document.getElementsByClassName('sidebar')[0]
const btnCloseSidebar = document.getElementsByClassName('sidebar__btn-close')[0]
const overlay = document.getElementsByClassName('overlay')[0]
const btnCall = document.querySelectorAll('.icon-call')
const btnMessage = document.querySelectorAll('.icon-message')
const modal = document.querySelectorAll('.modal')
const btnCloseModal = document.querySelectorAll('.modal__btn')
const textHidable = document.querySelector('.about__text--hidable');
const readMore = document.querySelectorAll('.read-more');
// const readMoreText = document.querySelectorAll('read-more__text'); 


const desctop = document.querySelector('.desctop__content');
const desctopRepair = document.querySelector('.desctop__content--repair');



readMore[0].addEventListener('click', function () {
  if (textHidable.classList.contains('about__text--hidable')) {
    textHidable.classList.remove('about__text--hidable')
    readMore[0].getElementsByClassName('read-more__text')[0].innerHTML = 'Скрыть'
  } else {
    textHidable.classList.add('about__text--hidable')
    readMore[0].getElementsByClassName('read-more__text')[0].innerHTML = 'Читать все';
  }
})



readMore[1].addEventListener('click',function(){
  desctop.classList.toggle('desctop__content--click');
 
  if(desctop.classList.contains('desctop__content--click')){
    readMore[1].getElementsByClassName('read-more__text')[0].innerHTML = 'Скрыть все';
  } else{
    readMore[1].getElementsByClassName('read-more__text')[0].innerHTML = 'Показать все';
  }

})


readMore[2].addEventListener('click',function(){
  desctopRepair.classList.toggle('desctop__content--click');
 
  if(desctopRepair.classList.contains('desctop__content--click')){
    readMore[2].getElementsByClassName('read-more__text')[0].innerHTML = 'Скрыть все';
  } else{
    readMore[2].getElementsByClassName('read-more__text')[0].innerHTML = 'Показать все';
  }
})







btnCloseModal.forEach((elem) => {
  elem.addEventListener('click', function () {
    overlay.classList.remove('overlay--active')
    modal.forEach((elem) => {
      elem.classList.remove('modal--active')
    })
  })
})

btnMessage.forEach(function (elem) {
  elem.addEventListener('click', function () {
    modal[1].classList.add('modal--active')
    sidebar.classList.remove('sidebar--active')
    overlay.classList.add('overlay--active')
  })
})

btnCall.forEach(function (elem) {
  elem.addEventListener('click', function () {
    modal[0].classList.add('modal--active')
    sidebar.classList.remove('sidebar--active')
    overlay.classList.add('overlay--active')
  })
})

burger.addEventListener('click', () => {
  sidebar.classList.add('sidebar--active')
  overlay.classList.add('overlay--active')
})

btnCloseSidebar.addEventListener('click', () => {
  sidebar.classList.remove('sidebar--active')
  overlay.classList.remove('overlay--active')
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('overlay--active')
  sidebar.classList.remove('sidebar--active')
  modal.forEach(function (elem) {
    elem.classList.remove('modal--active')
  })
})
