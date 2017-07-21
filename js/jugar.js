//Matríz de contenido jugar

function matrixJugar(nivel){
	if (nivel == 1) {//Conocedor
		return [
			{"name":"El Nombre1", "detail":"El detalle1", "img":"img/conocedor/img1.png"},
			{"name":"El Nombre2", "detail":"El detalle2", "img":"img/conocedor/img2.png"},
			{"name":"El Nombre3", "detail":"El detalle3", "img":"img/conocedor/img3.png"},
			{"name":"El Nombre4", "detail":"El detalle4", "img":"img/conocedor/img4.png"},
			{"name":"El Nombre5", "detail":"El detalle5", "img":"img/conocedor/img5.png"},
			{"name":"El Nombre6", "detail":"El detalle6", "img":"img/conocedor/img6.png"},
			{"name":"El Nombre7", "detail":"El detalle7", "img":"img/conocedor/img7.png"},
			{"name":"El Nombre8", "detail":"El detalle8", "img":"img/conocedor/img8.png"},

		];
	}
	if (nivel == 2) {//Pensador1
		return [
			{"name":"El Nombre1", "img":"img/pensador1/img1.png"},
			{"name":"El Nombre2", "img":"img/pensador1/img2.png"},
			{"name":"El Nombre3", "img":"img/pensador1/img3.png"},
			{"name":"El Nombre4", "img":"img/pensador1/img4.png"},
			{"name":"El Nombre5", "img":"img/pensador1/img5.png"},
			{"name":"El Nombre6", "img":"img/pensador1/img6.png"},
			{"name":"El Nombre7", "img":"img/pensador1/img7.png"},
			{"name":"El Nombre8", "img":"img/pensador1/img8.png"},
			{"name":"El Nombre9", "img":"img/pensador1/img9.png"},
			{"name":"El Nombre10", "img":"img/pensador1/img10.png"},
		];
	}
	if (nivel == 3) {//Pensador2
		return [
			{"sentence":"La afirmacion1", "answ":"1"},
			{"sentence":"La afirmacion2", "answ":"0"},
			{"sentence":"La afirmacion3", "answ":"1"},
			{"sentence":"La afirmacion4", "answ":"0"},
			{"sentence":"La afirmacion5", "answ":"1"},
			{"sentence":"La afirmacion6", "answ":"0"},
		];
	}

}
