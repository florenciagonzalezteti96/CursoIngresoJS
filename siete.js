/*
	tomar notas de 5 alumnos
	tomar sexo f/m de 5 alumnos
	informar por alert:
	el promedio de notas
	la nota mas baja y el sexo de la persona //calcular nota mayor y menor.
	la cantidad de varones que su nota sea igual o mayor a 6

*/
function mostrar()
{
	var notas;//tomar 5 notas
	var sexo;// tomar 5 sexos
	var contador=0;
	var mensaje;//mostar resultados
	var promedioTotal;//promedio total de notas
	var acumuladorNotas=0;//indica total de notas
	var notaAlta=0;
	var notaBaja=0;//nota mas baja. indicar sexo 
	var sexoNotaBaja;
	var cantidadVaronesAprobados;
	var respuesta=="si";
	
	while(respuesta=="si")
	{
		do{
			notas=prompt("Ingrese una nota");
			notas=parseInt(notas);
			sexo=prompt("Ingrese un sexo (f/m)");
		}while(isNaN(notas));

		while(notas>notaAlta)
		{
			notaAlta=notas;
		}
		while(notas<notaBaja)
		{
			notaBaja=notas;
			sexoNotaBaja=sexo;
		}
		


		contador++;
	}

	promedioTotal=notas/

	alert("El promedio de las notas totales es de "+promedioTotal+". La nota mas baja ha sido"+notaBaja+"("+sexoNotaBaja+")"+". La cantidad de varones con nota mayor o igual a 6 es de: "+cantidadVaronesAprobados);
	

	/*while(contador<=5)
	{
		do{
		notas=prompt("Ingrese una nota");//tomar notas de 5 alumnos
		notas=parseInt(notas);
		sexo=prompt("Ingrese un sexo (f/m)");//tomar sexo f/m de 5 alumnos
		
		}while(isNaN(notas)); //nota mayor y nota menor

		if(notas>notaMayor)
		{
			notaMayor=notas;

		}
		if(notas<notaMenor)
		{
			notaMenor=notas;
			sexoNotaBaja=notaMenor;
		}

		if(sexo=="m")
		{

		}







		
		acumuladorNotas=acumuladorNotas+notas;
		contador++;


	}

	promedioTotal=acumuladorNotas/contador;



	alert("El promedio de las notas totales es de "+promedioTotal+". La nota mas baja ha sido"+notaBaja+"("+sexoNotaBaja+")"+". La cantidad de varones con nota mayor o igual a 6 es de: "+cantidadVaronesAprobados);
*/
}
