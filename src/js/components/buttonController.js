const btnMenuOpen = document.getElementById('btn-menu');
const btnMenuClosed = document.getElementById('btn-menu-close');
const counterBagElement = document.getElementById('qtde-counter');
const btnComprarList = document.getElementsByClassName('button-buy');

let menuOpen = false;
let counterBag = 0;

btnMenuOpen.addEventListener('click', abreFechaMenu);
btnMenuClosed.addEventListener('click', abreFechaMenu);

percorreAndAdicionaFunctionsToElementList(btnComprarList, abreFechaMenu);



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




function percorreAndAdicionaFunctionsToElementList(domElementList, funcao) {
	for (let el of domElementList) {
		el.addEventListener('click', () => {
			funcao(el);
		});
	}
}



//Não é o ideal, mas foi rápido (pra desenvolver)
function alteraEstadoBotaoCompra(element) {
	let spanTexto = element.getElementsByClassName('bTexto');
	let imgBtn = element.getElementsByClassName('btn-image');
	if (element.classList.contains('button-buy-comprado')) {
		element.classList.remove('button-buy-comprado')
		spanTexto[0].innerHTML = "COMPRAR";
		imgBtn[0].style.display = 'none';
		counterBag--;
	} else {
		element.classList.add('button-buy-comprado')
		spanTexto[0].innerHTML = "COMPRADO!";
		imgBtn[0].style.display = 'flex';
		counterBag++;
	}
	verificaCounterQtde();
}


function verificaCounterQtde() {
	let divBag = document.getElementById('divBagCounter');
	if (counterBag > 0) {
		divBag.style.display = 'flex';
	} else {
		divBag.style.display = 'none';

	}
	counterBagElement.innerHTML = counterBag;
}