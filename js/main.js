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

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

/*SCROLL TO TOP*/

$(document).ready(function() {
	$("#linkToTop").click(function() {
	   $("html, body").animate({
		  scrollTop: $($(this).attr("href")).offset().top + "px"
	   }, {
		  duration: 900,
		  easing: "swing"
	   });
	   return false;
	});  
});

/*SLIDER ADV*/

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

/*SLIDER ADVERTISE IN INTERNET*/

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

/*SLIDER ADVERTISE SEO*/

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

/*PHONE MASKS*/

let phoneMask = document.getElementById('feedback-form-phone');
let phoneMask1 = document.getElementById('feedback-form-phone-2');
let phoneMaskPpc1 = document.getElementById('form-ppc-1-phone');
let phoneMaskPpc2 = document.getElementById('form-ppc-2-phone');
let phoneMaskPpc3 = document.getElementById('form-ppc-3-phone');
let phoneMaskSeo1 = document.getElementById('form-seo-1-phone');
let phoneMaskSeo2 = document.getElementById('form-seo-2-phone');
let phoneMaskSeo3 = document.getElementById('form-seo-3-phone');

if (phoneMask) {
	$(function(){
		$(phoneMask).mask("+375-(99)-999-99-99");
	});
}

if (phoneMask1) {
	$(function(){
		$(phoneMask1).mask("+375-(99)-999-99-99");
	});
}

if (phoneMaskPpc1) {
	$(function(){
		$(phoneMaskPpc1).mask("+375-(99)-999-99-99");
	});
}

if (phoneMaskPpc2) {
	$(function(){
		$(phoneMaskPpc2).mask("+375-(99)-999-99-99");
	});
}

if (phoneMaskPpc3) {
	$(function(){
		$(phoneMaskPpc3).mask("+375-(99)-999-99-99");
	});
}

if (phoneMaskSeo1) {
	$(function(){
		$(phoneMaskSeo1).mask("+375-(99)-999-99-99");
	});
}

if (phoneMaskSeo2) {
	$(function(){
		$(phoneMaskSeo2).mask("+375-(99)-999-99-99");
	});
}

if (phoneMaskSeo3) {
	$(function(){
		$(phoneMaskSeo3).mask("+375-(99)-999-99-99");
	});
}

/*PROMO FORM MAIN*/

window.addEventListener('DOMContentLoaded', function () {
	var form = document.getElementById('form-promo-main');
	var thanks = document.getElementById('form-promo-main-thanks');
	var thanksText = document.getElementById('feedback-form-main__thanks__text');
	var buttonClose = document.getElementById('feedback-form__thanks__button');

	if (form) {
		function success() {
			form.reset();
			thanksText.innerHTML = 'Спасибо! Наш менеджер свяжется с вами в ближайшее время.';
			thanks.classList.add('show-thanks');
		}
	
		function error() {
			thanksText.innerHTML = 'Упс! Что-то пошло не так. Попробуйте еще раз.';
			thanks.classList.add('show-thanks');
		}
	
		form.addEventListener('submit', function (ev) {
			ev.preventDefault();
			var data = new FormData(form);
			ajax(form.method, form.action, data, success, error);
		});
	
		buttonClose.addEventListener('click', function() {
			thanks.classList.remove('show-thanks');
		});
	}
});

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

window.addEventListener('DOMContentLoaded', function () {
	var formSecond = document.getElementById('form-promo-second');
	var thanksSecond = document.getElementById('form-promo-second-thanks');
	var thanksSecondText = document.getElementById('feedback-form-second__thanks__text');
	var buttonCloseSecond = document.getElementById('feedback-form-second__thanks__button');

	if (formSecond) {
		function success() {
			formSecond.reset();
			thanksSecondText.innerHTML = 'Спасибо! Наш менеджер свяжется с вами в ближайшее время.';
			thanksSecond.classList.add('show-thanks');
		}
	
		function error() {
			thanksSecondText.innerHTML = 'Упс! Что-то пошло не так. Попробуйте еще раз.';
			thanksSecond.classList.add('show-thanks');
		}
	
		formSecond.addEventListener('submit', function (ev) {
			ev.preventDefault();
			var dataSecond = new FormData(formSecond);
			ajax(formSecond.method, formSecond.action, dataSecond, success, error);
		});
	
		buttonCloseSecond.addEventListener('click', function() {
			thanksSecond.classList.remove('show-thanks');
		});
	}
});

function ajax(method, url, dataSecond, success, error) {
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
	xhr.send(dataSecond);
}

/*PPC FORM 1*/

window.addEventListener('DOMContentLoaded', function () {
	var formPpc1 = document.getElementById('form-ppc-1');
	var thanksPpc1 = document.getElementById('form-ppc-1-thanks');
	var thanksPpc1Text = document.getElementById('form-ppc-1__thanks__text');
	var buttonClosePpc1 = document.getElementById('form-ppc-1__thanks__button');

	if (formPpc1) {
		function success() {
			formPpc1.reset();
			thanksPpc1Text.innerHTML = 'Спасибо! Наш менеджер свяжется с вами в ближайшее время.';
			thanksPpc1.classList.add('show-thanks');
		}
	
		function error() {
			thanksPpc1Text.innerHTML = 'Упс! Что-то пошло не так. Попробуйте еще раз.';
			thanksPpc1.classList.add('show-thanks');
		}
	
		formPpc1.addEventListener('submit', function (ev) {
			ev.preventDefault();
			var dataPpc1 = new FormData(formPpc1);
			ajax(formPpc1.method, formPpc1.action, dataPpc1, success, error);
		});
	
		buttonClosePpc1.addEventListener('click', function() {
			thanksPpc1.classList.remove('show-thanks');
		});
	}
});

function ajax(method, url, dataPpc1, success, error) {
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
	xhr.send(dataPpc1);
}

/*PPC FORM 2*/

window.addEventListener('DOMContentLoaded', function () {
	var formPpc2 = document.getElementById('form-ppc-2');
	var thanksPpc2 = document.getElementById('form-ppc-2-thanks');
	var thanksPpc2Text = document.getElementById('form-ppc-2__thanks__text');
	var buttonClosePpc2 = document.getElementById('form-ppc-2__thanks__button');

	if (formPpc2) {
		function success() {
			formPpc2.reset();
			thanksPpc2Text.innerHTML = 'Спасибо! Наш менеджер свяжется с вами в ближайшее время.';
			thanksPpc2.classList.add('show-thanks');
		}
	
		function error() {
			thanksPpc2Text.innerHTML = 'Упс! Что-то пошло не так. Попробуйте еще раз.';
			thanksPpc2.classList.add('show-thanks');
		}
	
		formPpc2.addEventListener('submit', function (ev) {
			ev.preventDefault();
			var dataPpc2 = new FormData(formPpc2);
			ajax(formPpc2.method, formPpc2.action, dataPpc2, success, error);
		});
	
		buttonClosePpc2.addEventListener('click', function() {
			thanksPpc2.classList.remove('show-thanks');
		});
	}
});

function ajax(method, url, dataPpc2, success, error) {
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
	xhr.send(dataPpc2);
}

/*PPC FORM 3*/

window.addEventListener('DOMContentLoaded', function () {
	var formPpc3 = document.getElementById('form-ppc-3');
	var thanksPpc3 = document.getElementById('form-ppc-3-thanks');
	var thanksPpc3Text = document.getElementById('form-ppc-3__thanks__text');
	var buttonClosePpc3 = document.getElementById('form-ppc-3__thanks__button');

	if (formPpc3) {
		function success() {
			formPpc3.reset();
			thanksPpc3Text.innerHTML = 'Спасибо! Наш менеджер свяжется с вами в ближайшее время.';
			thanksPpc3.classList.add('show-thanks');
		}
	
		function error() {
			thanksPpc3Text.innerHTML = 'Упс! Что-то пошло не так. Попробуйте еще раз.';
			thanksPpc3.classList.add('show-thanks');
		}
	
		formPpc3.addEventListener('submit', function (ev) {
			ev.preventDefault();
			var dataPpc3 = new FormData(formPpc3);
			ajax(formPpc3.method, formPpc3.action, dataPpc3, success, error);
		});
	
		buttonClosePpc3.addEventListener('click', function() {
			thanksPpc3.classList.remove('show-thanks');
		});
	}
});

function ajax(method, url, dataPpc3, success, error) {
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
	xhr.send(dataPpc3);
}

/*SEO FORM 1*/

window.addEventListener('DOMContentLoaded', function () {
	var formSeo1 = document.getElementById('form-seo-1');
	var thanksSeo1 = document.getElementById('form-seo-1-thanks');
	var thanksSeo1Text = document.getElementById('form-seo-1__thanks__text');
	var buttonCloseSeo1 = document.getElementById('form-seo-1__thanks__button');

	if (formSeo1) {
		function success() {
			formSeo1.reset();
			thanksSeo1Text.innerHTML = 'Спасибо! Наш менеджер свяжется с вами в ближайшее время.';
			thanksSeo1.classList.add('show-thanks');
		}
	
		function error() {
			thanksSeo1Text.innerHTML = 'Упс! Что-то пошло не так. Попробуйте еще раз.';
			thanksSeo1.classList.add('show-thanks');
		}
		
		formSeo1.addEventListener('submit', function (ev) {
			ev.preventDefault();
			var dataSeo1 = new FormData(formSeo1);
			ajax(formSeo1.method, formSeo1.action, dataSeo1, success, error);
		});
	
		buttonCloseSeo1.addEventListener('click', function() {
			thanksSeo1.classList.remove('show-thanks');
		});
	}
});

function ajax(method, url, dataSeo1, success, error) {
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
	xhr.send(dataSeo1);
}

/*SEO FORM 2*/

window.addEventListener('DOMContentLoaded', function () {
	var formSeo2 = document.getElementById('form-seo-2');
	var thanksSeo2 = document.getElementById('form-seo-2-thanks');
	var thanksSeo2Text = document.getElementById('form-seo-2__thanks__text');
	var buttonCloseSeo2 = document.getElementById('form-seo-2__thanks__button');

	if (formSeo2) {
		function success() {
			formSeo2.reset();
			thanksSeo2Text.innerHTML = 'Спасибо! Наш менеджер свяжется с вами в ближайшее время.';
			thanksSeo2.classList.add('show-thanks');
		}
	
		function error() {
			thanksSeo2Text.innerHTML = 'Упс! Что-то пошло не так. Попробуйте еще раз.';
			thanksSeo2.classList.add('show-thanks');
		}
	
		formSeo2.addEventListener('submit', function (ev) {
			ev.preventDefault();
			var dataSeo2 = new FormData(formSeo2);
			ajax(formSeo2.method, formSeo2.action, dataSeo2, success, error);
		});
	
		buttonCloseSeo2.addEventListener('click', function() {
			thanksSeo2.classList.remove('show-thanks');
		});
	}
});

function ajax(method, url, dataSeo2, success, error) {
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
	xhr.send(dataSeo2);
}

/*SEO FORM 3*/

window.addEventListener('DOMContentLoaded', function () {
	var formSeo3 = document.getElementById('form-seo-3');
	var thanksSeo3 = document.getElementById('form-seo-3-thanks');
	var thanksSeo3Text = document.getElementById('form-seo-3__thanks__text');
	var buttonCloseSeo3 = document.getElementById('form-seo-3__thanks__button');

	if (formSeo3) {
		function success() {
			formSeo3.reset();
			thanksSeo3Text.innerHTML = 'Спасибо! Наш менеджер свяжется с вами в ближайшее время.';
			thanksSeo3.classList.add('show-thanks');
		}
	
		function error() {
			thanksSeo3Text.innerHTML = 'Упс! Что-то пошло не так. Попробуйте еще раз.';
			thanksSeo3.classList.add('show-thanks');
		}
	
		formSeo3.addEventListener('submit', function (ev) {
			ev.preventDefault();
			var dataSeo3 = new FormData(formSeo3);
			ajax(formSeo3.method, formSeo3.action, dataSeo3, success, error);
		});
	
		buttonCloseSeo3.addEventListener('click', function() {
			thanksSeo3.classList.remove('show-thanks');
		});
	}
});

function ajax(method, url, dataSeo3, success, error) {
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
	xhr.send(dataSeo3);
}

/*LAZY LOAD ARROWS*/

registerListener('load', setLazy);
registerListener('load', lazyLoad);
registerListener('scroll', lazyLoad);

var lazy = [];

function setLazy(){
    lazy = document.getElementsByClassName('lazy');
    console.log('Found ' + lazy.length + ' lazy images');
} 

function lazyLoad(){
    for(var i=0; i<lazy.length; i++){
        if(isInViewport(lazy[i])){
            if (lazy[i].getAttribute('data-src')){
                lazy[i].src = lazy[i].getAttribute('data-src');
                lazy[i].removeAttribute('data-src');
            }
        }
    }
    
    cleanLazy();
}

function cleanLazy(){
    lazy = Array.prototype.filter.call(lazy, function(l){ return l.getAttribute('data-src');});
}

function isInViewport(el){
    var rect = el.getBoundingClientRect();
    
    return (
        rect.bottom >= 0 && 
        rect.right >= 0 && 
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
     );
}

function registerListener(event, func) {
    if (window.addEventListener) {
        window.addEventListener(event, func)
    } else {
        window.attachEvent('on' + event, func)
    }
}
