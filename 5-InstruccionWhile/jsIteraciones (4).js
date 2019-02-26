function mostrar()
{

	var numero;
	numero=prompt("ingrese un número entre 0 y 10.");

	while(numero<0 || numero>9)
	{	
		alert("Numero invalido");
		numero=prompt("Reingrese un numero!");
		console.log(numero);
	}

	document.getElementById('Numero').value=numero;

}//FIN DE LA FUNCIÓN
