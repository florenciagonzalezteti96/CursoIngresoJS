function mostrar()
{
 
var mesDelAño = document.getElementById('mes').value;
var mensaje;
//7-31
//4-30 ab jun sep nov
//1-28
//alert (mesDelAño);
switch(mesDelAño)
{
	case "Febrero":
	mensaje="Este mes tiene 28 dias.";
		break;
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
	mensaje="Este mes tiene 30 dias.";
		break;
	default:
	mensaje="Este mes tiene 31 dias.";
		break;
}

alert(mensaje);


	



}//FIN DE LA FUNCIÓN
