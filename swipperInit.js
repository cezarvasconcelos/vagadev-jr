import Swiper from './node_modules/swiper/swiper-bundle.esm.browser.js'

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},

	autoplay: {
		delay: 5000,
	},
});
