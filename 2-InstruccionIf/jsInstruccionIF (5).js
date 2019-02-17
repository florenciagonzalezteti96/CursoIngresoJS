function mostrar ()
{var laEdad;

laEdad=edad.value;

/*if(laEdad>=13 && laEdad<=17)
{
	NO PROGRAMAR UN "IF" O UN "ELSE" VACIO.
}
else
{
	alert("No es adolescente.");
}*/

if(!(laEdad>=13 && laEdad<=17))
{
	alert("No es adolescente.");
}



/*if(laEdad<13 || laEdad>17) -->TODO MENOS LA INTERSECCION. ES "O" EXCLUSIVA.
{
	alert("No es adolescente."); --> HAGO MENOS OPERACIONES CON ESTA OPCION.
}*/

}//FIN DE LA FUNCIÓN