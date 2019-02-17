function mostrar()
{
/* 
var laEdad;
var laEdad=edad.value;
if(laEdad>=18)
{
	alert("Es mayor de edad.");
}
if(laEdad>=13 && laEdad=<17)
{
	alert("Es adolescente.");
}
if(laEdad<13)
{
	alert("Es niño/a.");
}
*/

var laEdad;
var laEdad=edad.value;

if(laEdad>=18)
{
	alert("Es mayor de edad.");
	
	if(laEdad<13)
		alert("Es un niño.");
	else
	{
		alert("Es adolescente");
	}

	
}


}//FIN DE LA FUNCIÓN