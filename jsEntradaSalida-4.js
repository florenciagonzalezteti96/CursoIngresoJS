/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;

	nombre=prompt("Por favor ingrese su nombre:");

	document.getElementById("elNombre").value=nombre;
}
