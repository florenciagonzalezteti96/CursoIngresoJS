function mostrar()
{
//tomo la edad  

 var laEdad;
 var mensaje;
 laEdad=edad.value;
 laEdad=parseInt(laEdad);

 if(laEdad>17)
 {
 	mensaje="Usted es mayor de edad.";
 }

 else
 {
 	if(laEdad<13)
 	{
 		mensaje="Usted es un/a niño/a.";
 	}
 	else
 	{
 		mensaje="Ustes es un adolescente.";
 	}
 }
 
 alert(mensaje);



}//FIN DE LA FUNCIÓN