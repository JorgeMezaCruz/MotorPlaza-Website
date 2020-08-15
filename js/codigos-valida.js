//funcion validar de la pagina logueo
function validar(){	
	var correo=document.getElementById("txtcorreo").value;
		
	//expresion para validar correo
	var expcorreo=/^([a-z]+)\@([a-z]+)\.([a-z]{2,3})$/;

	
	if(!expcorreo.test(correo))
	{
		alert("Correo Incorrecto"); return 0;
	}
	
	alert("Correo Correcto");	
	
}



