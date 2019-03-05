function mostrar()
{
	var marcaProducto;
	var pesoDelProducto;
	var temperaturaDeAlmacenamiento;

	var productoMasPesado;
	var productoMasLigero;
	var marcaProductoMasPesado;
	var contadorTemperaturaPar=0;
	var contadorProductosATemperaturaMenosCero=0;
	var acumuladorPesoProductos=0;
	var promedioPesoTotal;
	var contadorDeIngresos=0;


	var respuesta=true;
	var flag=false;

	while(respuesta==true)
	{	
		//***validacion de datos:
		marcaProducto=prompt("Ingrese la marca del producto:");
		while(isNaN(marcaProducto)==false)
		{
			marcaProducto=prompt("El dato ingresado como marca es incorrecto. Reingrese una marca:");
		}
		
		pesoDelProducto=prompt("Ingrese el peso del producto (entre 1 y 100):");
		pesoDelProducto=parseInt(pesoDelProducto);
		while(isNaN(pesoDelProducto)==true || !(pesoDelProducto<101 && pesoDelProducto>0))
		{
			pesoDelProducto=prompt("El dato ingresado como peso del producto es incorrecto. Reingrese el peso del producto:");
		}

		temperaturaDeAlmacenamiento=prompt("Ingrese la temperatura de almacenamiento");
		while(isNaN(temperaturaDeAlmacenamiento)==true || !(temperaturaDeAlmacenamiento<=30 && temperaturaDeAlmacenamiento>=-30))
		{
			temperaturaDeAlmacenamiento=prompt("El dato ingresado como temperatura de almacenamiento es incorrecto. Reingrese la temperatura de almacenamiento:");
		}
		temperaturaDeAlmacenamiento=parseInt(temperaturaDeAlmacenamiento);

		//***calculo los productos mas pesados y mas ligeros.
		if(flag==false || pesoDelProducto>productoMasPesado)
		{
			productoMasPesado=pesoDelProducto;
			marcaProductoMasPesado=marcaProducto;
		}

		if(flag==false || pesoDelProducto<productoMasLigero)
		{
			productoMasLigero=pesoDelProducto;
			flag=true;
		}
		

		
		//calculos de datos de temperatura.
		if(temperaturaDeAlmacenamiento%2==0)
		{
			contadorTemperaturaPar++;
		}

		if(temperaturaDeAlmacenamiento<0)
		{
			contadorProductosATemperaturaMenosCero++;
		}

		contadorDeIngresos++;
		acumuladorPesoProductos=acumuladorPesoProductos+pesoDelProducto;
		acumuladorPesoProductos=parseInt(acumuladorPesoProductos);
		
		respuesta=confirm("Desea seguir ingresando datos?");
	}

	promedioPesoTotal=acumuladorPesoProductos/contadorDeIngresos;
	promedioPesoTotal=parseInt(promedioPesoTotal);

	document.write("La cantidad de temperaturas pares es "+contadorTemperaturaPar+". La marca del producto mas pesado es "+marcaProductoMasPesado+". La cantidad de productos que se conservan a menos de 0 grados es "+contadorProductosATemperaturaMenosCero+". El promedio del peso de todos los productos es "+promedioPesoTotal+" y el peso maximo y el minimo son "+productoMasPesado+" y "+productoMasLigero);
}
