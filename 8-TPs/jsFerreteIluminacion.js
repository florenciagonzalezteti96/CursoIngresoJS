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
	var precioDescuento;
	var precioDesc;
	var precio;
	var descuento;
	var descuentoDos;
	var descuentoTres;
	var lamparitas;

	cantidadLamparas=document.getElementById('Cantidad').value;
	precioDescuento=document.getElementById('precioDescuento').value;
	marca=document.getElementById('Marca');

	cantidadLamparas=parseInt(cantidadLamparas);
	precioDescuento=parseInt(precioDescuento);
	precioDesc=parseInt(precioDesc);
	precio=parseInt(precio);
	lamparitas=35;
	lamparitas=parseInt(lamparitas);
	descuentoDos=parseInt(descuentoDos);
	descuentoTres=parseInt(descuentoTres);

	precio=lamparitas*cantidadLamparas;

	if(cantidadLamparas>=6)
	{
		descuento=precio*50/100;
		descuento=precio-descuento;
		document.getElementById('precioDescuento').value=descuento;
	}

	if(cantidadLamparas==5)
	{
		if(marca=="ArgentinaLuz")
		{
			descuentoDos=precio*40/100;
			descuentoDos=precio-descuentoDos;
			document.getElementById('precioDescuento').value=descuentoDos;
		}
		else
		{
			descuentoTres=precio*30/100;
			descuentoTres=precio-descuentoTres;
			document.getElementById('precioDescuento').value=descuentoTres;
		}

	}
 
}
