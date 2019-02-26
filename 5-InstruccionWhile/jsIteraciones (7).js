function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
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

}//FIN DE LA FUNCIÓN
