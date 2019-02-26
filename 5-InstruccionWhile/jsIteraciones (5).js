function mostrar()
{

var sexo;
sexo=prompt("ingrese f ó m .");

while(sexo!="f" && sexo!="m")
{
	alert("La respuesta no es valida");
	sexo=prompt("Reingrese f ó m .");
}
/*while(sexo!="f" || sexo!="m")
	se inicia un bucle infinito y 
	se valida una opcion.
	si ingreso "f" me toma el while porque
	"f" es distinto a "m".
*/

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
