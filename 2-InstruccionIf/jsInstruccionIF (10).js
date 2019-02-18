function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var mensaje;
	numeroRandom=Math.floor((Math.random() * 11) + 1);

	if (numeroRandom>4)
	{
		mensaje="APROBÓ";

		if (numeroRandom==9 || numeroRandom==10)
		{
			mensaje="EXCELENTE";
		}
	}

	else
	{
		mensaje="Vamos, la proxima se puede";
	}

alert(mensaje);

}//FIN DE LA FUNCIÓN
