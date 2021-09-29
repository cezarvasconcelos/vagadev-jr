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

const btnComprarList = document.getElementsByClassName('button-buy');

for (let btn of btnComprarList) {
	btn.addEventListener('click', () => {
		alteraEstadoBotaoCompra(btn);
	});
}


//Não é o ideal, mas foi rápido
function alteraEstadoBotaoCompra(element) {
	let spanTexto = element.getElementsByClassName('bTexto');
	let imgBtn = element.getElementsByClassName('btn-image');
	if (element.classList.contains('button-buy-comprado')) {
		element.classList.remove('button-buy-comprado')
		spanTexto[0].innerHTML = "COMPRAR";
		imgBtn[0].style.display = 'none';
	} else {
		element.classList.add('button-buy-comprado')
		spanTexto[0].innerHTML = "COMPRADO!";
		imgBtn[0].style.display = 'flex';
	}

}