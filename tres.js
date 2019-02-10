function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio=prompt("Ingrese un precio:");
	descuento=prompt("Ingrese un porcentaje de descuento");

	precio=parseInt(precio);

	descuento=precio*descuento/100;

	precioFinal=precio-descuento;

	elPrecioFinal.value=precioFinal;
}
