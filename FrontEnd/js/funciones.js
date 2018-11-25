// JavaScript Document
//a2 + 2ab + c2 + d

//a=1 y b=1 => 1 + 2 + 1 = 4
//a=2 y b=2 => 4 + 8 + 4 = 16

function expresion(){
	var a;
	var b;
	var c;
	var d;
	var resultado;
	var ac;
	var dosab;
	var cc;
	a = document.getElementById("num1").value;
	b = document.getElementById("num2").value;
	c = document.getElementById("num3").value;
	d = document.getElementById("num4").value;
	a = parseInt(a);
	b = parseInt(b);
	c = parseInt(c);
	d = parseInt(d);	
	//a2
	ac = a * a;
	//2ab
	dosab = 2 * a * b;
	//b2
	cc = c * c;
	
	resultado = ac + dosab + cc + d;
	console.log("El resultado de la operación es:"+resultado);
	
	
}
