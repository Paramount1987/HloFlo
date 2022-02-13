// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import Swiper from "swiper/bundle";

document.addEventListener("DOMContentLoaded", () => {
	const swiperReview = new Swiper(".swiper-review", {
		slidesPerView: "auto",
		spaceBetween: 20,
		loop: true,

		autoplay: {
			delay: 3000,
			pauseOnMouseEnter: true,
			// disableOnInteraction: false,
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	const swiperGame = new Swiper(".swiper-game", {
		slidesPerView: "auto",
		spaceBetween: 15,
		loop: true,

		breakpoints: {
			992: {
				spaceBetween: 30,
			}
		},

		// autoplay: {
		// 	delay: 2500,
		// },

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	const swiperGameGift = new Swiper(".swiper-game-gift", {
		slidesPerView: "auto",
		spaceBetween: 30,

		simulateTouch: false,

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	// card
	const cardIntro = document.getElementById('card--intro');
	const cardRuler = document.getElementById('card--ruler');
	const cardHero = document.getElementById('card--hero');
	const cardSearcher = document.getElementById('card--searcher');
	const cardRebel = document.getElementById('card--rebel');

	setTimeout(() => {
		cardIntro.classList.add('open');
	}, 300)

	setTimeout(() => {
		cardRuler.classList.add('open');
		cardHero.classList.add('open');
		cardSearcher.classList.add('open');
		cardRebel.classList.add('open');
	}, 1100)

});

// Menu
const btnMenu = document.querySelector('.js-btn-menu');
const navMenu = document.querySelector('.js-nav');

btnMenu.addEventListener('click', (e) => {
	btnMenu.classList.toggle('show');
	navMenu.classList.toggle('show');
})