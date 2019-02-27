function mostrar()
{

	var numero;	
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCero=0;
	var contadorPar=0;
	var acumuladorSumaPositivos=0;
	var acumuladorSumaNegativos=0;
	var promedioPositivos;
	var promedioNegativos;
	var restaNumeros;
	//var respuesta="si";
	var respuesta=true;
	
	
	//while(respuesta=="si")
	while(respuesta==true)
	{
		do
		{
			numero=prompt("Ingrese un numero:");
			numero=parseInt(numero);
		
		}while(isNaN(numero));
		
		//sumar positivos
		if(numero>0)
		{
			acumuladorSumaPositivos=acumuladorSumaPositivos+numero;//sumapositivos
			contadorPositivos++;//cantidad de positivos

			if(numero%2==0)
			{
				contadorPar++;
			}
					
		}
		else//sumar negativos
		{
			if(numero<0)
			{
				acumuladorSumaNegativos=acumuladorSumaNegativos+numero;//suma negativos
				contadorNegativos++;//cantidad de negativos
			}
			else
			{
				contadorCero++;//mostrar cantidad de ceros
			}//if(numero<0)
		}//if(numero>0)
		
		respuesta=confirm("Desea ingresar otro numero?");
		
	}

promedioPositivos=acumuladorSumaPositivos/contadorPositivos;//promedio de positivos
promedioNegativos=acumuladorSumaNegativos/contadorNegativos;//promedio negativos
restaNumeros=acumuladorSumaPositivos+(acumuladorSumaNegativos);//resta entre positivos y negativos


document.write("La suma total de negativos es de "+acumuladorSumaNegativos+" y la suma total de positivos es de "+acumuladorSumaPositivos+". La cantidad de ceros es de "+contadorCero+", el promedio de positivos es "+promedioPositivos+ ", el promedio de negativos es de "+promedioNegativos+" y la diferencia entre positivos y negativos es de "+restaNumeros+". La cantidad de numeros par es de "+contadorPar+".");

} //FIN DE LA FUNCIÓN
