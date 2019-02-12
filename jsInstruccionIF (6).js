function mostrar()
{
//tomo la edad  

 /*var laEdad;
 laEdad=edad.value;
 laEdad=parseInt(laEdad);

 if(laEdad>18)
 {
 	alert("Usted es mayor de edad.");
 }
 
 if(laEdad<13)
 {
 	alert("Usted es adolescente.");
 }

  if(laEdad<17)
 {
 	alert("Usted es adolescente.");
 }

 if(laEdad<13)
 {
 	alert("Usted es un niño");
 }*/

 /*var laEdad;
 laEdad=edad.value;
 laEdad=parseInt(laEdad);

 if(laEdad>18)
 {
 	alert("Usted es mayor de edad.");
 }

else
{
	alert("Usted es un adolescente.");
}

if(laEdad>13)
{
}

else
{
	alert("Usted es un niño.");
}--> se repite usted es un adolescente
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