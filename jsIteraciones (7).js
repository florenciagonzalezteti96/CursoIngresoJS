/*function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;


	while(respuesta=="si");
	{
	
		numero=prompt("Ingrese un numero:");
		numero=parseInt(numero);
		contador=contador+1;
		acumulador=acumulador+numero;
		respuesta=prompt("Desea ingresar otro numero? si/no");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN*/

function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;
	
	numero=prompt("Ingrese un numero:");
	numero=parseInt(numero);


	while(respuesta=="si");
	{
		if(isNaN(numero))
		{
			numero=prompt("Error, ingrese un numero:");
			numero=parseInt(numero);
		}
		else
		{
			contador=contador+1;
			acumulador=acumulador+numero;
			respuesta=prompt("Desea ingresar otro numero? si/no");
		}
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

/*
contador=0;
respuesta='si';

while()
{
	respuesta=prompt();
	if(respuesta=='no')
	{
	break;
	}
	contador++;
}
*/
