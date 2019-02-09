/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo; 
  var descuento;
  var result;
  
  sueldo=importe.value;
  /*establezco valor de variable*/
  
  sueldo=parseInt(sueldo);
  /*valor de variable a entero*/

  descuento=sueldo*25/100;
  /*asigno un valor al descuento*/
  
  result=(sueldo-descuento);
  /*aplico el desc al valor de variable importe*/
  
  resultado.value=result; 
  /*muestro resultado con ID*/
}
