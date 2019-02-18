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
	}

	else
	{
		suma=(numUno)+(numDos);

		if(suma>10)
		{
			alert("La suma es "+suma+" y supero el 10.");
		}
		else
		{
			alert(""+suma);
		}

	}

}

