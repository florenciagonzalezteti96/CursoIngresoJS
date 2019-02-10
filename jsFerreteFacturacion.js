/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var uno;
	var dos;
	var tres;
	var sumar;

	uno=precioUno.value;
	dos=precioDos.value;
	tres=precioTres.value;

	uno=parseInt(uno);
	dos=parseInt(dos);
	tres=parseInt(tres);

	sumar=uno+dos+tres;

	alert("La suma total es de: "+ sumar);

}

function Promedio () 
{
	var uno;
	var dos;
	var tres;
	var prom;

	uno=precioUno.value;
	dos=precioDos.value;
	tres=precioTres.value;

	uno=parseInt(uno);
	dos=parseInt(dos);
	tres=parseInt(tres);

	prom=(uno+dos+tres)/3;

	alert("El promedio total es de: "+ prom);
}

function PrecioFinal () 
{
	var uno;
	var dos;
	var tres;
	var sumar;
	var iva;
	var precioFinal;

	uno=precioUno.value;
	dos=precioDos.value;
	tres=precioTres.value;

	uno=parseInt(uno);
	dos=parseInt(dos);
	tres=parseInt(tres);

	sumar=uno+dos+tres;

	iva=sumar*21/100;

	precioFinal=sumar+iva;

	alert("La suma total es de: "+ precioFinal);
}