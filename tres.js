function mostrar()
{
	var precio;
 var descuento;
 var precioFinal;

 precio=prompt("Ingrese precio");
 descuento=prompt("Ingrese porcentaje de descuento");
 
 precio=parseInt(precio);
 descuento=parseInt(descuento);

 descuento=precio*descuento/100;

 precioFinal=precio-descuento;

 elPrecioFinal.value=precioFinal;
}
