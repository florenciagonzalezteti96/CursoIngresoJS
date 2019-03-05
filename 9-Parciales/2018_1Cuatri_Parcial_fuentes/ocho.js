/*
ingreso de dos datos:
una letra
un numero entre -100 y 100 
mostrar con document.write
cantidad de numeros pares
cantidad de numeros impares
cantidad de ceros
promedio de todos los numeros positivos
suma de numeros negativos
numero y letra del maximo y minimo.
*/

function mostrar()
{
	var letra;
	var numero;
	
	var contadorNumerosPares=0;
	var contadorNumerosImpares=0;
	var contadorNumerosPositivos=0;
	var contadorCeros=0;
	
	var promedioNumerosPositivos;
	var acumuladorNumerosPositivos=0;
	var sumaNumerosNegativos=0;
	
	var numeroMaximo;
	var letraMaximo;
	var numeroMinimo;
	var letraMinimo;
	var respuesta=true;
	var flag=false;

	while(respuesta!=false)
	{
		//***validacion de los datos.
		letra=prompt("Ingrese una letra:");
		while(isNaN(letra)==false)
		{
			letra=prompt("Ingrese UNA LETRA:");
		}

		numero=prompt("Ingrese un numero entre -100 y 100:");
		numero=parseInt(numero);
		while(isNaN(numero)==true || numero>100 || numero<-100)
		{
			numero=prompt("Reingrese un NUMERO ENTRE -100 y 100");
			numero=parseInt(numero);
		}

		//***cantidad de numeros pares e impares:
		if(numero%2==0)
		{
			contadorNumerosPares++;
		}
		else
		{
			contadorNumerosImpares++;
		}

		//***datos del promedio de positivos, suma negativos y cantidad de ceros:
		if(numero>0)
		{
			contadorNumerosPositivos++;
			acumuladorNumerosPositivos=acumuladorNumerosPositivos+numero;
		}
		else
		{
			if(numero<0)
			{
				sumaNumerosNegativos=sumaNumerosNegativos+(numero);
			}
			else
			{
				contadorCeros++;
			}//if(numero<0)

		}//if(numero>0)

		//***calculo de numero maximo y numero minimo
		if(flag==false || numero>numeroMaximo)
		{
			numeroMaximo=numero;
			letraMaximo=letra;

		}
		if(flag==false || numero<numeroMinimo)
		{
			numeroMinimo=numero;
			letraMinimo=letra;
			flag=true;
		}

		respuesta=confirm("Desea ingresar otra letra y otro numero?");
	}

	promedioNumerosPositivos=acumuladorNumerosPositivos/contadorNumerosPositivos;
	document.write("La cantidad de numeros pares es "+contadorNumerosPares+", la cantidad de numeros impares es "+contadorNumerosImpares+", la cantidad de ceros es: "+contadorCeros+", el promedio de todos los positivos es: "+promedioNumerosPositivos+", la suma de los negativos es "+sumaNumerosNegativos+". El numero y la letra del maximo son "+numeroMaximo+" y "+letraMaximo+" y el numero y la letra del minimo son "+numeroMinimo+" y "+letraMinimo+".");
}

