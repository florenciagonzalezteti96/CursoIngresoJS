/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numUno;
	var numDos;
	var dividir;

	numUno=numeroDividendo.value;
	numDos=numeroDivisor.value;



	numUno= parseInt(numUno);	
	numDos= parseInt(numDos);
	
  

    dividir=numUno%numDos;

	alert ("el resto es: " + dividir);

}
