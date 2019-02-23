/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al 
mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un 
descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o 
“FelipeLamparas” se hace un descuento del 25 % y si es de otra marca 
el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el 
descuento es del 15%, si es  “FelipeLamparas” se hace un descuento 
del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar 
un 10% de ingresos brutos en informar del impuesto con el siguiente 
mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 
var cantidadLamparas;
var marca;
var precioDescuento;
var precio;
var descuento;
var descuentoFinal;
var aumento;
var aumentoFinal;

cantidadLamparas=document.getElementById('Cantidad').value;
precioDescuento=document.getElementById('precioDescuento').value;
marca=document.getElementById('Marca').value;

cantidadLamparas=parseInt(cantidadLamparas);
precioDescuento=parseInt(precioDescuento);
precio=cantidadLamparas*35;
descuento=parseInt(descuento);
descuentoFinal=parseInt(descuentoFinal);

if(cantidadLamparas>=6)
{
	descuento=50;
}
else
{
	if(cantidadLamparas==5)
	{
		if(marca=="ArgentinaLuz")
		{
			descuento=40;
		}
		else
		{
			descuento=30;
		}//IF(marca=="ArgentinaLuz")		
	}
	else
	{
		if(cantidadLamparas==4)
		{
			if (marca=="ArgentinaLuz" || "FelipeLamparas")
			{
				descuento=25;
			}
			else
			{
				descuento=20;
			}//if (marca=="ArgentinaLuz" || "FelipeLamparas")
		}
		else
		{
			if(cantidadLamparas==3)
			{
				if(marca=="ArgentinaLuz")
				{
					descuento=15;
				}
				else
				{
					if(marca=="FelipeLamparas")
					{
						descuento=10;
					}
					else
					{
						descuento=5;
					}//if(marca=="FelipeLamparas")
				}//if(marca=="ArgentinaLuz")
			}//if(cantidadLamparas==3)
		}//if(cantidadLamparas==4)
	}//if(cantidadLamparas==5)
}//IF(cantidadLamparas>=6)

descuento=precio*descuento/100;
descuentoFinal=precio-descuento;
document.getElementById('precioDescuento').value=descuentoFinal;

if(descuentoFinal>120)
{
	aumento=descuentoFinal*10/100;
	alert("IIBB Usted pago $"+aumento);
}

}*/

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al 
mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un 
descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o 
“FelipeLamparas” se hace un descuento del 25 % y si es de otra marca 
el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el 
descuento es del 15%, si es  “FelipeLamparas” se hace un descuento 
del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar 
un 10% de ingresos brutos en informar del impuesto con el siguiente 
mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/

function CalcularPrecio () 
{

var cantidadLamparas;
var marca;
var brutoAPagar;
var descuento=0;
var precioDescuento;
var totalAPagar;
var IIBB;

cantidadLamparas=document.getElementById('Cantidad').value;
precioDescuento=document.getElementById('precioDescuento').value;
marca=document.getElementById('Marca').value;


cantidadLamparas=parseInt(cantidadLamparas);
precioDescuento=parseInt(precioDescuento);
brutoAPagar=cantidadLamparas*35;
IIBB=0;

switch(cantidadLamparas)
{
	case 5:
		if(marca=="ArgentinaLuz")
		{
			descuento=40;
		}
		else
		{
			descuento=30;
		}
			break;
	case 4:
		if (marca=="ArgentinaLuz" || marca=="FelipeLamparas")
		{
			descuento=25;
		}
		else
		{
			descuento=20;
		}
			break;
	case 3:
		if(cantidadLamparas==3)
		{
			if(marca=="ArgentinaLuz")
			{
				descuento=15;
			}
			else
			{
				if(marca=="FelipeLamparas")
				{
					descuento=10;
				}
				else//funciona como un default
				{
					descuento=5;
				}
				break;
			}//if(marca=="ArgentinaLuz")
		}//if(cantidadLamparas==3)				
	default:
		if(cantidadLamparas>=6)
		{
			descuento=50;
		}
	break;
}

totalAPagar=brutoAPagar-(brutoAPagar*descuento/100);

if(totalAPagar>120)
{
	IIBB=totalAPagar*10/100;
	alert("IIBB Usted pago $"+IIBB);
}

totalAPagar=totalAPagar+IIBB;

}

}
