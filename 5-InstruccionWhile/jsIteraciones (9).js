/*function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var cantidad=0;
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt("Ingrese un numero");
		if(cantidad==0)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}
		}
		cantidad ++; //incrementa en 1.
		respuesta=prompt("¿Desea ingresar otro numero?");	
	}

	document.getElementById('maximo').value=maximo;
	documento.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN*/

//CON BANDERA (FLAG)
function mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	var flag=false;
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt("Ingrese un numero");
		if(flag==false || numero>maximo)
		{
			maximo=numero;
		}
		if(flag==false || numero<minimo)
		{
			minimo=numero;
			flag=true;
		}
		
		cantidad ++; //incrementa en 1.
		respuesta=prompt("¿Desea ingresar otro numero?");	
	}

	document.getElementById('maximo').value=maximo;
	documento.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN


}//FIN DE LA FUNCIÓN
