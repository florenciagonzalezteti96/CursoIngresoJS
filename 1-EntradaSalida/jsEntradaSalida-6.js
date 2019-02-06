/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

