/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumar;
	

	primerPrecio=precioUno.value;
	segundoPrecio=precioDos.value;
	tercerPrecio=precioTres.value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	sumar=(primerPrecio+segundoPrecio+tercerPrecio);

	alert("El precio final es: "+ sumar);
}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	
	var promedio;
	

	primerPrecio=precioUno.value;
	segundoPrecio=precioDos.value;
	tercerPrecio=precioTres.value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);

	promedio=(primerPrecio+segundoPrecio+tercerPrecio)/3;

	
	alert("El promedio final es de: "+ promedio)
}
function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var sumar;
	var precioFinal;
	var iva;

	primerPrecio=precioUno.value;
	segundoPrecio=precioDos.value;
	tercerPrecio=precioTres.value;

	primerPrecio=parseInt(primerPrecio);
	segundoPrecio=parseInt(segundoPrecio);
	tercerPrecio=parseInt(tercerPrecio);
	iva=parseInt(iva);

	sumar=(primerPrecio+segundoPrecio+tercerPrecio);

	iva=sumar*21/100;

	precioFinal=sumar+iva;

	alert("El precio final es: "+ precioFinal);
}	
