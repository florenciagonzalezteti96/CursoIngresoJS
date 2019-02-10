/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

	alert(sumar);

}

function restar()
{
	var uno;
	var dos;
	var restar;

	uno=numeroUno.value;
	dos=numeroDos.value;

	uno=parseInt(uno);
	dos=parseInt(dos);

	restar=uno-dos;

	alert(restar);
}

function multiplicar()
{ 
	var uno;
	var dos;
	var multiplicar;

	uno=numeroUno.value;
	dos=numeroDos.value;

	uno=parseInt(uno);
	dos=parseInt(dos);

	multiplicar=uno*dos;

	alert(multiplicar);
}

function dividir()
{
	var uno;
	var dos;
	var dividir;

	uno=numeroUno.value;
	dos=numeroDos.value;

	uno=parseInt(uno);
	dos=parseInt(dos);

	dividir=uno/dos;

	alert(dividir);
}

