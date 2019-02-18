function mostrar()
{
/* 
var laEdad;
var laEdad=edad.value;
if(laEdad>=18)
{
	alert("Es mayor de edad.");
}
if(laEdad>=13 && laEdad=<17)
{
	alert("Es adolescente.");
}
if(laEdad<13)
{
	alert("Es niño/a.");
}
*/

var laEdad;
 laEdad=edad.value;
 laEdad=parseInt(laEdad);

 if(laEdad<18 && laEdad>12)
 {
	alert("Usted es un/a adolescente.");
 }
if(laEdad>17)
{
	alert("Usted es mayor de edad.");
}
if(laEdad<13)
{
	alert("Usted es un/a niño/a.");
}


}//FIN DE LA FUNCIÓN 
