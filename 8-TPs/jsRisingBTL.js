/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{ //****definicion de variables

 var edad;//parseInt
 var sexo;
 var estadoCivil;
 var sueldoBruto;//parseInt
 var numeroDeLegajo;//parseInt
 var nacionalidad;
 var respuesta=true;

 //****validacion de datos
 while(respuesta==true)
 {
 	//validacion de edad
 	edad=prompt("Inserte una edad (entre 18 y 90 años inclusive):");
 	edad=parseInt(edad);
 	while(isNaN(edad)==true || !(edad<=90 && edad>=18))
 	{
 		edad=prompt("Dato incorrecto. Reingrese una edad ENTRE 18 Y 9O AÑOS INCLUSIVE");
 		edad=parseInt(edad);
 	}


 	//validacion de sexo
 	sexo=prompt("Ingrese un sexo (m o f):");
 	while (isNaN(sexo)==false || !(sexo=="m" || sexo=="f"))
 	{
 		sexo=prompt("Dato incorrecto. Reingrese un sexo (m o f)");
 	}


 	//validacion de estado civil
 	estadoCivil=prompt("Ingrese su estado civil (ingrese 1 si es soltero/a, 2 si es casado/a, 3 si es divorciado/a, 4 si es viudo/a):");
 	estadoCivil=parseInt(estadoCivil);
 	while(isNaN(estadoCivil)==true || !(estadoCivil==1 || estadoCivil==2 || estadoCivil==3 || estadoCivil==4))
 	{
 		estadoCivil=prompt("Dato incorrecto. Ingrese 1 si es soltero/a, 2 si es casado/a, 3 si es divorciado/a o 4 si es viudo/a:");
 	}
 	
 	switch(estadoCivil)
 	{
 		case 1:
 		estadoCivil="soltero/a"
 			break;
 		case 2:
 		estadoCivil="casado/a"
 			break;
 		case 3:
 		estadoCivil="divorciado/a";
 			break;
 		case 4:
 		estadoCivil="viudo/a";
 			break;
 	}


 	//validacion de sueldo bruto
 	sueldoBruto=prompt("Ingrese un sueldo bruto (no menor a $8000):");
 	sueldoBruto=parseInt(sueldoBruto);
 	while(isNaN(sueldoBruto)==true || !(sueldoBruto>=8000))
 	{
 		sueldoBruto=prompt("Reingrese un sueldo bruto NO MENOR A $8000:");
 	}


 	//validacion numero de legajo
 	numeroDeLegajo=prompt("Ingrese un numero de legajo (de 4 cifras, sin ceros a la izquierda)");
 	numeroDeLegajo=parseInt(numeroDeLegajo);
 	while(isNaN(numeroDeLegajo)==true || !(numeroDeLegajo<10000 && numeroDeLegajo>999))
 	{
 		numeroDeLegajo=prompt("Dato incorrecto. Reingrese un numero de legajo con 4 CIFRAS Y SIN CEROS A LA IZQUIERDA");
 	}


 	//validacion de nacionalidad
 	nacionalidad=prompt("Ingrese una nacionalidad (ingrese A si es argentino/a, E si es extranjero/a o N si es nacionalizado/a");
 	while(isNaN(nacionalidad)==false || !(nacionalidad=="A" || nacionalidad=="E" || nacionalidad=="N") )
 	{
 		nacionalidad=prompt("Dato incorrecto. Ingrese A si es argentino/a, E si es extranjero/a o N si es nacionalizado/a");
 	}

 	switch(nacionalidad)
 	{
 		case "A":
 		nacionalidad="Argentino/a"
 			break;
 		case "B":
 		nacionalidad="Extranjero/a"
 			break;
 		case "C":
 		nacionalidad="Nacionalizado/a";
 			break;
 	}
 	respuesta=confirm("Desea ingresar de nuevo los valores?");//cierre del while
 }
//mostrar datos
 document.getElementById('Edad').value=edad;
 document.getElementById('Sexo').value=sexo;
 document.getElementById('EstadoCivil').value=estadoCivil;
 document.getElementById('Sueldo').value=sueldoBruto;
 document.getElementById('Legajo').value=numeroDeLegajo;
 document.getElementById('Nacionalidad').value=nacionalidad;


}
