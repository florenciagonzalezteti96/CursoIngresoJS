function mostrar()
{

	var numero;
	var contador=0;
	var acumulador=0;

	while(contador<5)
	{
		numero=prompt("Ingrese un numero:");
		numero=parseInt(numero);
		contador=contador+1;
		acumulador=acumulador+numero;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN

/*
	El contador suma una constante a la 
	variable. 
	cont= cont+1; o cont+=1; o cont++;(contador de post incremento)
										nos muestra el valor y despues le agrega uno.
	contador de preincremento ++cont (suma primero y muestra despues)

	acumulador--> variable mas una variable.
	acum=acum+num
	acum+=num
	acum*=num;
	
	flag o bandera-->variable con valor determinado
	flag=true;
	flag=false;
	para saber si se dio una variable o no.
*/
