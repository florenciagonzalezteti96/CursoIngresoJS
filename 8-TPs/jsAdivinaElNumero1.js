/*Al comenzar el juego generamos un número 
secreto del 1 al 100, 
en la pantalla del juego dispondremos de un cuadro de texto para ingresar
un número y un botón “Verificar”, 
si el número ingresado es el mismo que el número secreto se dará 
por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var numeroUsuario;
var contadorIntentos;
var mensaje;

contadorIntentos=0;

function comenzar()
{
	/*	Genero el número RANDOM entre 1 y 100.
		comparo con el dato ingresado en id="numero"
		ver si es igual(“Usted es un ganador!!! y en solo X intentos”.), menor (“falta…”), o mayor (“se pasó…”).
	*/
		numeroSecreto=Math.floor((Math.random() * 101) + 1);
		numeroSecreto=parseInt(numeroSecreto);
		

}

function verificar()//esta funcion simula un while
{
	
	numeroUsuario=document.getElementById('numero').value;
	numeroUsuario=parseInt(numeroUsuario);

	if(numeroUsuario==numeroSecreto)
	{
		mensaje="Usted es un ganador!!! y en solo "+contadorIntentos+" intentos.";
	}
	else
	{
		if(numeroUsuario>numeroSecreto)
		{
			mensaje="se pasó…";
		}
		else
		{
			mensaje="falta…";
		}
	}

contadorIntentos++;
document.getElementById('intentos').value=contadorIntentos;

alert(mensaje);


}
