/*PARCIAL
function mostrar()
{
  var precioProd;
  var recargo;
  var precioFinal;

  precioProd=prompt("Ingrese el precio del producto:");
  precioProd=parseInt(precioProd);

  recargo=precioProd*10/100;

  precioFinal=precioProd+recargo;

  alert("El precio del producto en efectivo es: $"+precioProd+", con tarjeta tiene un recargo del 10% que seria $"+recargo+" de recargo, costandole final $"+precioFinal);

}*/
function mostrar()
{
  
	var nombre;
	var localidad;

	nombre=elNombre.value;
	localidad=laLocalidad.value;

	alert("Usted es "+nombre+" y vive en la localidad de "+localidad);

}
