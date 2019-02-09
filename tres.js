function mostrar()
{
 var precio;
 var descuento;
 var operacion;
 var operacionDos;

 var precio=prompt("Indicar precio");
 var descuento=prompt("Indicar descuento");

 operacion=(precio*descuento);
 operacionDos=(operacion/100);
 

 elPrecioFinal.value=operacionDos;

}
