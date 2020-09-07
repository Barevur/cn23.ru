window.onload = function () {
	// адаптив картинок ---
	function ibg() {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img')) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	};
	ibg();

	// бургер ---
	// let burgerIcon = document.querySelector('.header__icon-burger');
	// let burgerMenu = document.querySelector('.header__burger-menu');

	// burgerIcon.onclick = function () {
	// 	burgerIcon.classList.toggle('active'); // --- иконка переключается на крестик
	// 	burgerMenu.classList.toggle('active'); // --- выезд меню бургера
	// };

};