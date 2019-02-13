/*Al realizar una compra, si compra de mas de dos productos se realiza un descuento del 10% y si supera los $2000
se agrega un descuento adicional de 15%, si el pago es con tarjeta y no efectivo al precio final se le agrega un 10%
de recargo.*/

function mostrar()
{
	var cantidad;
	var precio;
	var metodoPago;
	var recargo;
	var finalRecargo;
	var descuentoDiez;
	var primerDesc;
	var descuentoQuince;
	var segundoDesc;
	var precioTotal;
	var precioTotalDos;
	//var mensaje;

	cantidad=prompt("Ingrese cuantos productos busca comprar:");
	alert("Si compra mas de dos productos se realizara un descuento del 10%.");
	precio=prompt("Ingrese el precio total:");
	alert("Si supera los $2000, se agregara un descuento adicional del 15%.");
	metodoPago=prompt("Ingrese si su metodo de pago es: tarjeta o efectivo.");
	alert("Si paga con tarjeta y no efectivo, al precio final se le agregara un 10% de recargo.");

	cantidad=parseInt(cantidad);
	precio=parseInt(precio);

	descuentoDiez=precio*10/100;
	descuentoQuince=precio*15/100;
	recargo=precio*10/100;

	//mensaje="usted compro "+cantidad+" producto/s";

	if(cantidad>2)
	{
		primerDesc=precio-descuentoDiez;
		precioTotal=primerDesc;
		//mensaje="asi que tiene un 10% de descuento, ";

		if(precio>2000)
		{
			segundoDesc=primerDesc-descuentoQuince;
			precioTotal=segundoDesc;
			//mensaje="y ha superado los $2000, por lo que tiene un 15% de descuento.";
		}
    }

	else
	{
		precioTotal=precio;
	}
			
	if(metodoPago=tarjeta)
	{
		finalRecargo=precio+recargo;
		precioTotal=finalRecargo;
		//mensaje="Ha ingresado la tarjeta como metodo de pago, por lo que tiene un 10% de recargo.";
	}

	else
	{
		precioTotal=precio;
	}

	//mensaje="Su costo final es de"+precioTotal;

	alert("El precio total es de: $"+precioTotal);



}
