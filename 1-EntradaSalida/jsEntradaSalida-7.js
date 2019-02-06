/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numUno;
	var numDos;
	var sumar;

	numUno=numeroUno.value;
	numDos=numeroDos.value;



	numUno= parseInt(numUno);	
	numDos= parseInt(numDos);
	
  

    sumar=numUno+numDos;

	alert ("la suma es: " + sumar);
}

function restar()
{
	var numUno;
	var numDos;
	var restar;

	numUno=numeroUno.value;
	numDos=numeroDos.value;



	numUno= parseInt(numUno);	
	numDos= parseInt(numDos);
	
  

    restar=numUno-numDos;

	alert ("la resta es: " + restar);
}

function multiplicar()
{ 
	var numUno;
	var numDos;
	var multiplicar;

	numUno=numeroUno.value;
	numDos=numeroDos.value;



	numUno= parseInt(numUno);	
	numDos= parseInt(numDos);
	
  

    multiplicar=numUno*numDos;

	alert ("el resultado es: " + multiplicar);
}

function dividir()
{
	var numUno;
	var numDos;
	var dividir;

	numUno=numeroUno.value;
	numDos=numeroDos.value;



	numUno= parseInt(numUno);	
	numDos= parseInt(numDos);
	
  

    dividir=numUno/numDos;

	alert ("el resultado es: " + dividir);
}

