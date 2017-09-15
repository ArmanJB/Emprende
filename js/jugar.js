//Matríz de contenido jugar

function matrixJugar(nivel){
	if (nivel == 1) {//Conocedor
		return [
			{"id":"1", "img":"img/conocedor/img1.png", "name":"Steve Jobs", "detail":"“Visionario, inspirador y brillante”"},
			{"id":"2", "img":"img/conocedor/img2.png", "name":"Bill Gates", "detail":"Empresario, informático y filántropo estadounidense, cofundador de la empresa de software Microsoft junto con Paul Allen. "},
			{"id":"3", "img":"img/conocedor/img3.png", "name":"Jeff Bezos", "detail":"Es el emprendedor que revolucionó las compras a través de Internet. "},
			//{"id":"4", "img":"img/conocedor/img3.png", "name":"Jeff Bezos", "detail":"“Acabo de encerrarme… Es sólo porque con un poco de aislamiento me encuentro con que empiezo a ser más creativo…”."},
			{"id":"5", "img":"img/conocedor/img4.png", "name":"Larry Page & Serguéi Brin", "detail":"Creadores del motor de búsquedas que revolucionó el mundo entero."},
			{"id":"6", "img":"img/conocedor/img5.png", "name":"Mark Zuckerberg", "detail":"Creador de la red social que cambió nuestra manera de socializar, de vivir y hasta de hacer negocios. "},
			{"id":"7", "img":"img/conocedor/img6.png", "name":"Warren Edward Buffett", "detail":"Considerado uno de los más grandes inversores en el mundo."},
			{"id":"8", "img":"img/conocedor/img7.png", "name":"Sam Walton", "detail":"Fundador de la tienda minorista más grande de Estados Unidos y una de las empresas más grandes del mundo."},
			{"id":"9", "img":"img/conocedor/img8.png", "name":"Richard Branson", "detail":"Su gran secreto es que sus padres le enseñaron a aprender por medio de la reflexión."},
			{"id":"10", "img":"img/conocedor/img9.png", "name":"Amancio Ortega", "detail":"Es un empresario español dedicado al sector textil. "},
			{"id":"11", "img":"img/conocedor/img10.png", "name":"Thomas Alva Edison", "detail":"Empresario y un prolífico inventor estadounidense que patentó más de mil inventos."},
			//{"id":"12", "img":"img/conocedor/img10.png", "name":"Thomas Alva Edison", "detail":'“El Genio es un 1% de Inspiración y 99% de Transpiración”.'},
			//{"id":"13", "img":"img/conocedor/img10.png", "name":"Thomas Alva Edison", "detail":'“No Fracasé, soló descubrí 999 maneras de cómo no hacer una bombilla.” '},
			{"id":"14", "img":"img/conocedor/img11.png", "name":"Elon Musk", "detail":'"Es un físico sudafricano que comenzó su vida intentando crear algo de importancia y que dejara marca en el mundo."'},
			{"id":"15", "img":"img/conocedor/img12.png", "name":"Henry Ford", "detail":'"Sus coches hicieron historia gracias a sus revolucionarios diseños."'},
			{"id":"16", "img":"img/conocedor/img13.png", "name":"Howard Schultz", "detail":'"Sentó las bases de lo que al día de hoy significa  un “ambiente en el que la intimidad de la relación con el espacio y la experiencia del café pudiera cobrar vida”."'},
			{"id":"17", "img":"img/conocedor/img14.png", "name":"Walt Disney", "detail":'Figura capital de la historia del cine de animación infantil.'},
			{"id":"18", "img":"img/conocedor/img15.png", "name":"Steve Wozniak", "detail":'Se le considera uno de los padres de la revolución de las computadoras.'},
			{"id":"19", "img":"img/conocedor/img16.png", "name":"Lawrence J. Ellison", "detail":'Es uno de los multimillonarios más conocidos y ocupa el puesto número 6 entre las mayores fortunas personales del mundo.'},
			{"id":"20", "img":"img/conocedor/img17.png", "name":"Ray Kroc", "detail":'Empresario, comerciante e inversionista estadounidense, famoso por impulsar la empresa McDonald´s.'},
			{"id":"21", "img":"img/conocedor/img18.png", "name":"Soichiro Honda", "detail":'En su primera entrevista le dijeron que no cuadraba con la empresa, pero ese obstáculo lo llevó a crear su propia empresa.'},
			{"id":"22", "img":"img/conocedor/img19.png", "name":"Chris Gardner", "detail":'"Luchó a favor de las personas sin hogar en Estados Unidos mientras criaba a su hijo."'},
			{"id":"23", "img":"img/conocedor/img20.png", "name":"Muhammad Yunus", "detail":'Emprendedor social, banquero, economista y líder social. Desarrollador de los conceptos de microcrédito y micro finanzas. '},
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
			{"sentence":"Sin coraje no puedes alcanzar tus sueños.", "answ":"1"},
			{"sentence":"Los grandes innovadores no pueden cometer errores.", "answ":"0"},
			{"sentence":"El riesgo más grande es no tomar ninguno.", "answ":"1"},
			{"sentence":"Lo más importante no es celebrar el éxito, sino aprender del fracaso.", "answ":"1"},
			{"sentence":"La timidez solo está en la mente, no dejes que te conquiste.", "answ":"1"},
			{"sentence":"El trabajo en equipo es una de las claves del éxito.", "answ":"1"},
			{"sentence":"El fracaso inspira a los ganadores y derrota a los perdedores.", "answ":"1"},
			{"sentence":"Si algo que te propones no funciona, debes abandonarlo.", "answ":"0"},
			{"sentence":"Una persona sin autoconfianza, puede desarrollarse como emprendedora. ", "answ":"0"},
			{"sentence":"Es mejor recorrer caminos tradicionales, antes de buscar nuevos (caminos).", "answ":"0"},
			{"sentence":"Aprovechar las pequeñas oportunidades, abre puertas a las más grandes.", "answ":"1"},
			{"sentence":"No debes seguir tu intuición.", "answ":"0"},
			{"sentence":"Tu mayor competencia eres tú mismo.", "answ":"1"},
			{"sentence":"Tu mayor competencia son los demás.", "answ":"0"},
			{"sentence":"Para ser exitoso debes dedicar tiempo para pensar.", "answ":"1"},
			{"sentence":"Una persona exitosa valora a los demás de la misma manera en que le gusta ser valorado.", "answ":"1"},
			{"sentence":"Para iniciar un  proyecto no es necesario comprender la situación que deseas resolver.", "answ":"0"},
			{"sentence":"Para iniciar un proyecto debes preguntarte ¿Qué es lo que no te gusta de tu entorno? ¿Qué es lo que te gustaría cambiar? ¿Cómo lo cambiarías y qué necesitas para hacerlo?", "answ":"1"},
			{"sentence":"No debes compartir tus proyectos o ideas con otras personas.", "answ":"0"},
			{"sentence":"Al terminar un proyecto es clave reflexionar y aprender para crecer.", "answ":"1"},
			{"sentence":"Steve Jobs es el fundador de Microsoft.", "answ":"0"},
			{"sentence":"Uno de los principios para emprender es creer en uno mismo.", "answ":"1"},
			{"sentence":"Para ser un emprendedor debes ser mayor de edad.", "answ":"0"},
			{"sentence":"Si al compartir tus ideas o nuevos proyectos no creen en ti, debes desistir y buscar nuevos sueños.", "answ":"0"},
			{"sentence":"Para desarrollar un proyecto debes: sentir, pensar, crear, compartir y reflexionar.", "answ":"1"},
			{"sentence":"Para desarrollar un proyecto debes: sentir, pensar, crear, compartir. No necesitas reflexionar en lo aprendido.", "answ":"0"},
			{"sentence":"Al compartir tus ideas o proyectos, la clave es inspirar a los demás.", "answ":"1"},
		];
	}

}
