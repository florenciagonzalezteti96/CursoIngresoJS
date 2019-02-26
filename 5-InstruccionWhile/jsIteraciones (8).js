function mostrar()
{


	var acumuladorPositivos=0;
	var	acumuladorNegativos=1
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while(respuesta=="si")
	{
		numero=prompt("Ingrese un numero:");
		numero=parseInt(numero);
		if(numero>=0)
		{
			acumuladorPositivos=acumuladorPositivos+numero;	
			document.getElementById('suma').value=acumuladorPositivos;
		}
		else
		{
			acumuladorNegativos=acumuladorNegativos*numero;
			document.getElementById('producto').value=acumuladorNegativos;
		}
		
		respuesta=prompt("Desea ingresar otro numero? si/no");
	}



//document.getElementById('suma').value=acumuladorPositivos;
//document.getElementById('producto').value=acumuladorNegativos;

}//FIN DE LA FUNCIÓN

