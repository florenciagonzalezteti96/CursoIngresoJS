/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	elNombre.value="florencia";
	//id = elNombre.value;

	//Alert (id); -->no muestra ventana

	//2. document.getElementById ("elNombre");

	//alert(elNombre); -->error [object HTMLInputElement]

	document.getElementById ("elNombre");

	alert(elNombre.value); //FUNCIONA.


}


