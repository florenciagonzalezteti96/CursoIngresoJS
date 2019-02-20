/*cada habitacion de un hotel tiene un precio,
 hay promociones segun el tipo de pago,
 si es con tarjeta visa un 10%
 si es por paypal un 15%, por mercadoPago un 10%,
 efectivo 20%
 cualquier otro medio solo un 5% 
 -----------------------------------------
 Si compra el paquete "todoIncluido" y pagas con paypal
 se te suma un 10% al descuento.
 
 si pagas en efectivo, tenes varias opciones:
 el paquete "soloDesayunos" te suma un 10% al descuento
 si el paquete es "todoIncluido" te suma un 15%
 y para el resto de los paquetes no tiene descuento adicional.
 */

function mostrar()
{
	var habitacionHotel;
	var precioHabitacion;
	var precioFinalHabitacion;
	var descuento;
	var tipoPago;
	var paquetes;
	var precioFinalPaquetes;

	tipoPago=prompt("Ingrese su tipo de pago: Visa, Paypal, MercadoPago, efectivo u otro.");
	paquetes=prompt("Ingrese que paquete desea comprar: soloDesayunos, todoIncluido u otro.");
	precioHabitacion=100;
	precioHabitacion=parseInt(precioHabitacion);


	switch(tipoPago)
	{
		case "Visa":
		case "MercadoPago":
		descuento=precioHabitacion*10/100;
		precioFinalHabitacion=precioHabitacion-descuento;
		mensaje="El costo final es de "+precioFinalHabitacion;
			break;

		case "Paypal":
		descuento=precioHabitacion*15/100;
		precioFinalHabitacion=precioHabitacion-descuento;
		mensaje="El costo final es de "+precioFinalHabitacion;
		break;
			switch(paquetes)
			{
				case "todoIncluido":
				descuento=precioHabitacion*10/100;
				precioFinalPaquetes=precioFinalHabitacion+descuento;
				break;
			}//case "Paypal"

		case "efectivo":
		descuento=precioHabitacion*20/100;
		precioFinalHabitacion=precioHabitacion-descuento;
		break;
			switch(paquetes)
			{
				case "soloDesayunos":
				descuento=precioHabitacion*10/100;
				precioFinalPaquetes=precioFinalHabitacion+descuento;
				mensaje="El costo final es de "+precioFinalPaquetes;
					break;
				case "todoIncluido":
				descuento=precioHabitacion*15/100;
				precioFinalHabitacion=precioFinalHabitacion+descuento;
				mensaje="El costo final es de "+precioFinalPaquetes;
					break;
			}//case "efectivo":
		

		case "otro":
		descuento=precioHabitacion*5/100;
		precioFinalHabitacion=precioHabitacion-descuento;
			break;
	}//switch(tipoPago)

	switch()

alert(mensaje);
}
