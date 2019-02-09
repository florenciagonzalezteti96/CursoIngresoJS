/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 /*var importe; PARA EL DATO DE USUARIO
 var result; PARA MOSTRAR AL USUARIO
 var sueldoFinal; PARA LA OPERACION

 var final;
*NO NECESITO ESTA VARIABLE 

 var importe=sueldo.value;
 VALOR PARA VARIABLE
 
 var result=resultado.value;
 ???? MAL. EL RESULTADO ES EL VALOR DE
 LA OPERACION ENTRE EL SUELDOFINAL Y
 EL IMPORTE. EL "ID" LO USO PARA MOSTRAR EL 
 DATO AL FINAL NO PARA TOMAR DATOS DEL USUARIO

 (TOMAR DATO)=(MOSTRAR DATO)

 importe=parseInt(importe);

 sueldoFinal=(importe*10/100);

 result=(sueldoFinal+importe);

 NO ESTABLECI UNA LINEA PARA MOSTRAR EL 
 RESULTADO DE LA OPERACION. */


 
  var importe; 
  var aumento;
  var result;
  
  importe=sueldo.value;
  /*establezco valor de variable*/
  importe=parseInt(importe);
  /*valor de variable a entero*/

  aumento=importe*10/100;
  /*asigno un valor al aumento*/
  
  result=(importe+aumento);
  /*aplico el aumento al valor de variable importe*/
  
  resultado.value=result; 
  /*muestro resultado con ID*/






 
 

















 












	
}
