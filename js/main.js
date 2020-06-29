/*loader*/

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

/*slider promo*/

/* $(document).ready(function(){
    $('.slider-promo').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: false,
        pauseOnHover: true,
        pauseOnDotsHover: true,
    });
}); */


/*slider team*/

/* $('.team-slider').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: true,
      }
    },
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
}); */

/*slider review*/

/* $('.slider-text-review').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
});
$('.slider-clients').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '59px',
    asNavFor: '.slider-text-review',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: '65px',
        }
      }
    ]
}); */
