
function mostrar()
{
	var nomUno;
	var nomDos;
	var edadUno;
	var edadDos;
	var suma;

	nomUno=prompt("Ingrese el primer nombre.");
	nomDos=prompt("Ingrese el segundo nombre.");
	edadUno=prompt("Ingrese la primera edad.");
	edadDos=prompt("Ingrese la segunda edad.");

	edadUno=parseInt(edadUno);
	edadDos=parseInt(edadDos);

	suma=edadUno+edadDos;

	alert("Ustedes son "+nomUno+" y "+nomDos+", sus edades son "+edadUno+" y "+edadDos+", y la suma de sus edades es "+suma);

}
