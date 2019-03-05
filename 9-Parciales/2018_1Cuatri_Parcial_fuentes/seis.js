function mostrar()
{
	var laHora;
	var mensaje;

	laHora=document.getElementById('laHora').value;
	laHora=parseInt(laHora);


	switch (laHora)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		mensaje="es de mañana";
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		mensaje="es de tarde";
			break;
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		mensaje="es de noche";
			if(laHora<=24 && laHora>20)
			{
				mensaje=mensaje+". A dormir.";
			}
		break;

			default:
			mensaje="La hora no es valida.";
			break;
	}
	alert(mensaje);

}
