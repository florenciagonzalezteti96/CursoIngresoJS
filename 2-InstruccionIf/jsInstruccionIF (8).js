/*function mostrar()
{
//tomo la edad  
	var laEdad;
	var estado;
	laEdad=document.getElementById('edad').value;
	estado=document.getElementById('estadoCivil').value;

	if ((laEdad>=18) && (estado=="Soltero"))
	{
		alert("Es soltero y no es menor.");
	}

}//FIN DE LA FUNCIÓN*/

var laEdad;
var estado;
var mensaje;

laEdad=edad.value;
estado=estadoCivil.value;

if(laEdad<17)
{
	if(estado=="Soltero")
	{
		mensaje="Es muy pequeño para NO ser soltero.";
	}
	else
	{

	}

}

	
alert(mensaje);
