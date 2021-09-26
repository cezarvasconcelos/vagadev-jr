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
