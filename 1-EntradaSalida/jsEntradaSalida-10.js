/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var ingreso;
	var descuento;
	var result;

	ingreso=importe.value;
	ingreso=parseInt(ingreso);

	descuento=ingreso*25/100;

	result=ingreso-descuento;

	resultado.value=result;
	
}
