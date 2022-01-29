// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import Swiper from "swiper/bundle";

document.addEventListener("DOMContentLoaded", () => {
	const swiperReview = new Swiper(".swiper-review", {
		slidesPerView: "auto",
		spaceBetween: 30,
		loop: true,

		autoplay: {
			delay: 2500,
			// disableOnInteraction: false,
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	const swiperGame = new Swiper(".swiper-game", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,

		// autoplay: {
		// 	delay: 2500,
		// },

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
});
