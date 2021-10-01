
import Swiper from './package/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,


	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},

	autoplay: {
		delay: 200000,
	},
});

const swiper2 = new Swiper('.swiper2', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 'auto',
	pagination: {
		el: '.swiper-pagination2',
		type: 'fraction',
	},

	navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},

	autoplay: {
		delay: 20000,
	},
});


swiper.on('transitionEnd', function () {
	let title = document.getElementById('gameTitle');
	title.innerHTML = (swiper.realIndex == 0) ? 'Mortal Kombat' : 'Red Dead Redemption 2';
});