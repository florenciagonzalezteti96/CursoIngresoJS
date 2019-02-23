/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
function Rectangulo () 
{

	var largo;
	var ancho;
	var perimetro;
	var resultA;
	
	var largo=elLargo.value;
	var ancho=elAncho.value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	//perimetro=(largo*2)+(ancho*2)*3;-->80

	perimetro=(largo*2)+(ancho*2);

	resultA=perimetro/3;

	alert("La cantidad de alambre a comprar es: "+ resultA);

}

function Circulo () 
{

	var radio;
	var diametro;
	var circunferencia;
	var resultB;

	radio=elRadio.value;

	radio=parseInt(radio);

	circunferencia=2*3.14*radio;

	resultB=circunferencia/3;

	//resultB=diametro*3; -->12

	alert("La cantidad de alambre a comprar es: "+resultB);
	
}

function Materiales () 

{

	var largo;
	var ancho;
	var area;
	var bolsaCemento;
	var bolsaCal;

	var largo=elLargo.value;
	var ancho=elAncho.value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	area=(largo*ancho);

	bolsaCemento=area*2;

	bolsaCal=area*3;

	alert("Necesitara "+bolsaCemento+" bolsas de cemento y "+bolsaCal+" bolsas de cal");


	
}
