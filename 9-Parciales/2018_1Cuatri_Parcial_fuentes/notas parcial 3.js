if(cantidad>2)
	{
		primerDesc=precio-descuentoDiez;
		primerDesc=precio-descuentoDiez;
		mensaje="y tiene un 10% de descuento, "

		if(precio>2000)
		{
			segundoDesc=primerDesc-descuentoQuince;
			precioTotal=segundoDesc;
			mensaje="y ha superado los $2000, por lo que tiene un 15% de descuento."
		}

	else
	{
		precioTotal=precio;
	}
			
	if(metodoPago=tarjeta)
	{
		finalRecargo=precio+recargo;
		"Ha ingresado la tarjeta como metodo de pago, por lo que tiene un 10% de recargo."
	}

	else
	{
		precioTotal=precio
	}


	/*var mensaje

	mensaje="usted compro "+cantidad+" producto/s;

	mensaje="" 

	*/