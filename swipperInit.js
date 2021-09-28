import Swiper from './node_modules/swiper/swiper-bundle.esm.browser.js'

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
