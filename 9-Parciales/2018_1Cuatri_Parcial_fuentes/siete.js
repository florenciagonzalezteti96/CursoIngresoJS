function mostrar()
{
	var nota;
	var sexo;

	var notaMasBaja;
	var sexoNotaMasBaja;
	var contadorVaronesNotasAltas=0;
	var acumuladorNotas=0;
	var contador=0;
	
	var promedioNotasTotales;
	var flag=false;

	while(contador<5)
	{
		//*** valido notas y sumo las notas.
		nota=prompt("Ingrese una nota:");
		nota=parseInt(nota);
		while(isNaN(nota)==true || !(nota>0 && nota<=10))
		{
			nota=prompt("Dato incorrecto. Reingrese la nota.");
			nota=parseInt(nota);
			
		}
		acumuladorNotas=acumuladorNotas+nota;
		acumuladorNotas=parseInt(acumuladorNotas);

		//*** valido sexo
		sexo=prompt("Ingrese un sexo (m o f):");
		while(isNaN(sexo)==false || (sexo!="m" && sexo!="f"))
		{
			sexo=prompt("Dato incorrecto. Reingrese el sexo.");
		}

		//***calculo de la nota mas baja y su sexo.
		while(flag==false || nota<notaMasBaja)
		{
			notaMasBaja=nota;
			sexoNotaMasBaja=sexo;
			flag=true;
		}
		//***calculo la cantidad de varones aprobados.

		if(nota>=6 && sexo=="m")
		{
			contadorVaronesNotasAltas++;
			
		}
		//**cierre del while
		
		contador++;
	}
	

	promedioNotasTotales=acumuladorNotas/contador;
	alert("El promedio de notas totales es de "+promedioNotasTotales+". La nota mas baja y el sexo de esa persona son "+notaMasBaja+" y "+sexoNotaMasBaja+". La cantidad de varones con nota mayor o igual a 6 es de "+contadorVaronesNotasAltas);

}
