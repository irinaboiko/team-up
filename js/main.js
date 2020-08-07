/*PRE-LOADER*/

$(window).on('load', function () {
	$preloader = $('.loader'),
		$loader = $preloader.find('.loader-inner');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});

/*MOBILE MENU*/

const menuBtn = document.getElementsByClassName('menu-btn__button')[0];
const menuLines = document.getElementsByClassName('menu-btn__lines')[0];
const menuMobBox = document.getElementById('menu-header');
const menuItem = document.getElementsByClassName('menu__item');

menuBtn.addEventListener('click', function () {
	menuLines.classList.toggle('active');
	menuMobBox.classList.toggle('show');
});

menuMobBox.addEventListener('click', event => {
	const target = event.target,
		targetClassList = target.classList;

	if (targetClassList.contains('menu__item')) {
		menuLines.classList.remove("menu-btn-active");
		menuMobBox.classList.remove("menu-show");
	}
});

/*PROMO 100VH*/

//window.addEventListener('resize', () => {
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
//});

/*slider adv*/

$('.our__bonus').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				arrows: true,
			}
		},
		{
			breakpoint: 680,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrows: true,
			}
		},
	]
});

/*SLIDER INCREASE SALES*/

$('.our__advertising-mob').slick({
	infinite: false,
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrows: true,
			}
		},
	]
});

/*ADVERTISE IN INTERNET*/

$('.advertising-internet__block').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				arrows: true,
			}
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrows: true,
			}
		},
	]
});

/*ADVERTISE SEO*/

$('.advertising-internet-seo__block').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				arrows: true,
			}
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrows: true,
			}
		},
	]
});

/*SLIDER FOOTER*/

$('.slider').slick({
	dots: true,
	dotsClass: "my-dots",
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 900,
	arrows: true,
	draggable: true,
	autoplay: false,
	autoplaySpeed: 2000,
	infinite: true,
});


/*scroll menu*/

/* $("#menu-desktop").on("click","a", function (event) {
  event.preventDefault();
    let id  = $(this).attr('href'),
        top = $(id).offset().top - 75 + 'px';
    $('body,html').animate({scrollTop: top}, 900);
});

$("#menu-mob").on("click", "a", function (event) {
  event.preventDefault();
  let id  = $(this).attr('href'),
      top = $(id).offset().top - 75 + 'px';
  $('body,html').animate({scrollTop: top}, 900);
});

$("#home").on("click", "a", function (event) {
  event.preventDefault();
  let id  = $(this).attr('href'),
      top = $(id).offset().top - 75 + 'px';
  $('body,html').animate({scrollTop: top}, 900);
}); */

/*mobile menu*/

/* let menuBtn = document.querySelector('.menu-btn');
let menuLines = document.querySelector('.menu-btn-lines');
let menuMobBox = document.querySelector('.menu-box');
let menuItem = document.querySelectorAll('.menu-item');

if(menuBtn) {
  menuBtn.addEventListener('click', function() {
    menuLines.classList.toggle("menu-btn-active");
    menuMobBox.classList.toggle("menu-show");
  });
}

menuItem.forEach(function(btn) {
  btn.addEventListener('click', function() {
    menuLines.classList.remove("menu-btn-active");
    menuMobBox.classList.remove("menu-show");
  });
}); */

/*fix header*/

/* let header = document.querySelector('.header');

if(header) {
  window.onscroll = function(){
    if(document.documentElement.scrollTop > 590){
      header.classList.add("header-fixed");
    }
    else{
      header.classList.remove("header-fixed");
    }
  }
} */

/*PHONE MASKS*/

$(function(){
	$("#feedback-form-phone").mask("+375-(99)-999-99-99");
});

$(function(){
	$("#feedback-form-phone-2").mask("+375-(99)-999-99-99");
});


/*PROMO FORM MAIN*/

window.addEventListener('DOMContentLoaded', function () {

	// get the form elements defined in your form HTML above

	var form = document.getElementById('form-promo-main');
	var button = document.getElementById('feedback-form__button');
	var thanks = document.getElementById('form-promo-main-thanks');
	var thanksText = document.getElementById('feedback-form-main__thanks__text');
	var buttonClose = document.getElementsByClassName('feedback-form__thanks__button')[0];

	// Success and Error functions for after the form is submitted

	function success() {
		form.reset();
		thanksText.innerHTML = 'Спасибо! Наш менеджер свяжется с вами в ближайшее время.';
		thanks.classList.add('show-thanks');
	}

	function error() {
		thanksText.innerHTML = 'Упс! Что-то пошло не так. Попробуйте еще раз.';
		thanks.classList.add('show-thanks');
	}

	// handle the form submission event

	form.addEventListener("submit", function (ev) {
		ev.preventDefault();
		var data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});

	buttonClose.addEventListener('click', function() {
		thanks.classList.remove('show-thanks');
	});
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}



/*PROMO FORM SECOND*/
