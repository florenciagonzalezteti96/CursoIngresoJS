/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var uno;
	var dos;
	var sumar;

	uno=numeroUno.value;
	dos=numeroDos.value;

	uno=parseInt(uno);
	dos=parseInt(dos);

	sumar=uno+dos;

	alert("La suma total es: "+ sumar);
}
