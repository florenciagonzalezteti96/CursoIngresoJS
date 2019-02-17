function mostrar()
{
//tomo la edad  
var laEdad;
var estado;
laEdad=edad.value;
estado=estadoCivil.value;

/*if(laEdad<18)
{
	if(estado="Casado" || estado="Divorciado")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
}--> SE TIENEN QUE CUMPLIR LAS DOS A LA VEZ, COMO DICE EL ENUNCIADO.
*/

if(laEdad<18 && (estado!="Soltero"))//resuelvo la igualdad y la negacion todo en uno.
{
	alert ("Es muy pequeño para NO ser soltero.");
}

}//FIN DE LA FUNCIÓN 