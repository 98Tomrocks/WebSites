function toggleColor(arg) {
	
	if (document.getElementById(arg).style.color=="white")
	{
		document.getElementById(arg).style.color ="black";
		document.getElementById(arg).style.backgroundColor ="#D3D3D3";
		document.getElementById('bod').style.backgroundColor="#707070";
	}
	else{
		document.getElementById(arg).style.color ="white";
		document.getElementById(arg).style.backgroundColor ="#707070";
		document.getElementById('bod').style.backgroundColor="#D3D3D3";
	}
}

function toggleMenu(arg){
	if(document.getElementById(arg).style.display=='block'){
		document.getElementById(arg).style.display='none';
	}
	else{
		document.getElementById(arg).style.display='block';
	}
}