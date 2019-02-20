function mostrar()
{
	var planeta;
	var mensaje;

	planeta=prompt("Ingrese un planeta del sistema solar (en minusculas):");

	switch(planeta)
	{
		case "tierra":
		mensaje="acá vivimos";
			break;
		case "mercurio":
		case "venus":
		mensaje="acá hace más calor";
			break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "neptuno":
		case "urano":
		mensaje="acá hace más frio";
			break;
		default:
		mensaje="no es un planeta valido";
			break;
	}

alert(mensaje);

}
