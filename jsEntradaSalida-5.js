/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//var nombre;

	//nombre= prompt ("su nombre");
	//elNombre.value=nombre;

	//document.getElementbyId("elNombre").value=nombre;

	//var edad;
    //edad= promt ("edad");
	//laEdad.value=edad;

	//document.getElementbyId("laEdad").value=edad; 

	//--> mal. pide mi nombre e ingresa ese dato en la casilla de nombre.

//-----------------------------------------
	
	// var nombre = "su nombre";
	// elNombre.value=nombre;
	
	
	// document.getElementById = (nombre);

	//var edad = "su edad";
	//laEdad.value=edad;
	
	
	//document.getElementById = (edad);
	// mal. devuelve "su nombre" y "su edad"

//-----------------------------------------

	//document.getElementbyId = "Su nombre";

	//document.getElementbyId = "Su edad";

	// mal. no pasa nada.

//-----------------------------------------

	//var nombre;
	//elNombre = document.getElementbyId ("su nombre");
	//elNombre.value=nombre;

	//var edad;
	//laEdad = document.getElementbyId ("su edad");
	//laEdad.value=edad;

	//alert ("su nombre es" + nombre + "y su edad es" + edad);

//NO.

//-----------------------------------------

    // var nombre = "Su nombre";

    // var edad = "Su edad";
    
    //document.getElementById ("Su nombre" + "Su edad");

	//alert("Su nombre es" + nombre + "y su edad es" + edad);

    // VENTANA EMERGENTE: "Su nombre esSu nombrey su edad esSu edad"

   //----------------------------------------- 

   //elNombre.value = "Su nombre";

   //laEdad.value = "Su edad";
    
   //document.getElementById = laEdad.value + elNombre.value;

   //alert("Su nombre es" + elNombre.value + "y su edad es" + laEdad.value);

   // igual que anterior.

   //-----------------------------------------

   var nombre ;

   "Su nombre" = elNombre.value;

   var nombre = document.getElementbyId (nombre);

   var edad ;

   "Su edad" = laEdad.value;

   var edad = document.getElementbyId (edad);

   alert("Su nombre es " + nombre + " y su edad es " + edad);

//-----------------------------------------

}

