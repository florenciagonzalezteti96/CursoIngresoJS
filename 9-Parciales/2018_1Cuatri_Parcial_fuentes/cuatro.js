/*	4 importes.
mostrar el mayor importe de la compra.
mostrar cuanto es el total. 
del total si supera 100 descuento 10%.
del total si supera 50 el descuento es de 5%
de ser menos de 50, le sumo un 15%

function mostrar()
{
	var numUno;
	var numDos;
	var numTres;
	var numCuatro;
	var mensaje;
	var mensajeUno;
	var suma;
	var porcentaje;
	var importeTotal;

	numUno=prompt("Ingrese el primer importe:");
	numDos=prompt("Ingrese el segundo importe:");
	numTres=prompt("Ingrese el tercer importe:");
	numCuatro=prompt("Ingrese el cuarto importe");

	numUno=parseInt(numUno);
	numDos=parseInt(numDos);
	numTres=parseInt(numTres);
	numCuatro=parseInt(numCuatro);
	importeTotal=parseInt(importeTotal);
	porcentaje=parseInt(porcentaje);

	if(numUno>numDos && numUno>numTres && numUno>numCuatro)
	{
		mensajeUno="El mayor importe es "+numUno+" ";
	}
	else
	{
		if(numDos>numUno && numDos>numTres && numDos>numCuatro)
		{
			mensajeUno="El mayor importe es "+numDos+" ";
		}
		else
		{
			if(numTres>numUno && numTres>numDos && numTres>numCuatro)
			{
				mensajeUno="El mayor importe es "+numTres+" ";
			}
			else
			{
				mensajeUno="El mayor importe es "+numCuatro+" ";
			}//if(numTres)
		}//if(numDos)
	}//if(numUno)
	
	suma=(numUno+numDos+numTres+numCuatro);

	if(suma>100)
	{
		porcentaje=10;//10
		//importeTotalDesc=suma-porcentaje;
		mensaje="y el importe total es de: "+importeTotal;//Desc;
	}
	else
	{
		if(suma>50)
		{
			porcentaje=5;//5
			//importeTotalDesc=suma-porcentaje;
			mensaje="y el importe total es de "+importeTotal;//Desc;
		}
		else
		{
			porcentaje=-15;
			//importeTotalAum=suma+porcentaje;
			mensaje="y el importe total es de "+importeTotal;
		}//if(suma<100 && suma>50)
	}//if(suma>100)
	
	importeTotal=suma*porcentaje/100;
	importeTotal=suma-porcentaje;

	alert(mensajeUno+mensaje);

}*/
function mostrar() 

{
	var numUno;
	var numDos;
	var resta;
	var suma;

	numUno=prompt("Ingresar el primer numero:");
	numDos=prompt("Ingresar el segundo numero:");

	numUno=parseInt(numUno);
	numDos=parseInt(numDos);

	if(numUno==numDos)
	{
		alert(""+numUno+""+numDos);
	}
	else
	{
		if(numUno>numDos)
		{
			resta=numUno-numDos;
			alert(resta);
		}
		else
		{
			suma=(numUno)+(numDos);
			alert(""+suma);

			if(suma>10)
			{
				alert("La suma es "+suma+" y supero el 10.");
			}

		}
	}

	

}
