function sacarNombres(){
	let respuesta=new XMLHttpRequest();
	respuesta.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200){
			let nombres=this.responseText;
			let array_nombres=nombres.split(",");
			let objt_select=document.createElement("select");
			objt_select.id="selector";
			document.getElementsByTagName("div")[0].appendChild(objt_select);
			for(i=0;i<array_nombres.length;i++){
				let opcion=document.createElement("option");
				opcion.value=array_nombres[i];
				opcion.innerText=array_nombres[i];
				document.getElementById("selector").appendChild(opcion);
			}
		}
	}
	respuesta.open("GET","nombres.txt",true);
	respuesta.send();
}