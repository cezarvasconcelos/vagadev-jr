const btnMenuOpen = document.getElementById('btn-menu');
const btnMenuClosed = document.getElementById('btn-menu-close');
let menuOpen = false;

btnMenuOpen.addEventListener('click', abreFechaMenu);
btnMenuClosed.addEventListener('click', abreFechaMenu);


function abreFechaMenu() {
	let element = document.getElementsByClassName('menu-hamburger-container')[0]
	console.log('teste');
	if (menuOpen) {
		btnMenuClosed.style.display = 'none';
		btnMenuOpen.style.display = 'flex';
		element.style.display = 'none';
		element.style.visibility = 'hidden';
		element.style.opacity = 0;
		menuOpen = false;
	} else {
		btnMenuClosed.style.display = 'flex';
		btnMenuOpen.style.display = 'none';
		element.style.display = 'flex';
		element.style.visibility = 'visible';

		element.style.opacity = 1;
		menuOpen = true;
	}
}
