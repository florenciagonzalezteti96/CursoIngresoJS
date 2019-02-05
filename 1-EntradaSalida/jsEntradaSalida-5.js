/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;

	nombre= prompt ("su nombre");
	elNombre.value=nombre;

	document.getElementbyId("elNombre").value=nombre;

	var edad;

	edad= promt ("edad");
	laEdad.value=edad;

	document.getElementbyId("laEdad").value=edad;

	
}

