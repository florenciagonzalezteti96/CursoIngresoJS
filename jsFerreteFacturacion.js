/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	/*var primerPre;
	var segundoPre;
	var tercerPre;
	var sumar;

	document.getElementByID(PrecioUno).value=primerPre;
	document.getElementByID(PrecioDos).value=segundoPre;
	document.getElementByID(PrecioTres).value=tercerPre;

	sumar=(primerPre+segundoPre+tercerPre);

	alert("El precio final es: "+ sumar);*/

	/*var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumar;

	PrecioUno.value=primerPrecio;
	PrecioDos.value=segundoPrecio;
	PrecioTres.value=tercerPrecio;

	sumar=(primerPrecio+segundoPrecio+tercerPrecio);

	alert("El precio final es de: "+ sumar);*/

	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumar;

	primerPrecio=PrecioUno.value;
	segundoPrecio=PrecioDos.value;
	tercerPrecio=PrecioTres.value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	sumar=(primerPrecio+segundoPrecio+tercerPrecio);

	alert("El precio final es de: "+ sumar);


}

function Promedio () 
{
	/*var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var prom;
	var promedio;

	primerPrecio=PrecioUno.value;
	segundoPrecio=PrecioDos.value;
	tercerPrecio=PrecioTres.value;

	prom=(primerPrecio+segundoPrecio+tercerPrecio);

	promedio=prom/3;

	alert("El promedio final es de: "+ promedio);

	MENSAJE: "El promedio final es de: 33670"*/

	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	
	var promedio;

	primerPrecio=PrecioUno.value;
	segundoPrecio=PrecioDos.value;
	tercerPrecio=PrecioTres.value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	promedio=(primerPrecio+segundoPrecio+tercerPrecio/3);

	
	alert("El promedio final es de: "+ promedio)
}
function PrecioFinal () 
{
	
}