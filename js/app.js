var Calculadora = {

 	display : document.getElementById('display'),
	reset : document.getElementById('on'),
    suma : document.getElementById('mas'),
    resta : document.getElementById('menos'),
    multiplicacion : document.getElementById('por'),
    division : document.getElementById('dividido'),
    igual : document.getElementById('igual'),
    uno : document.getElementById('1'),
    dos : document.getElementById('2'),
    tres : document.getElementById('3'),
    cuatro : document.getElementById('4'),
    cinco : document.getElementById('5'),
    seis : document.getElementById('6'),
    siete : document.getElementById('7'),
    ocho : document.getElementById('8'),
    nueve : document.getElementById('9'),
    cero : document.getElementById('0'),
    punto : document.getElementById('punto'),
    negativo : document.getElementById('sign'),
    
    operandoa:0,
 	operandob:0,
 	operacion:'',
 	res:0,
 	memoria:0, // para permitir operaciones en cadena
 	borrarMemoria: function (){
 		memoria = 0;
 	},
 	borrarCeroInicial: function(){
 		if (display.innerHTML.startsWith("0") && (!display.innerHTML.includes('.')) ){
			display.innerHTML = display.innerHTML.replace(0,'');
		}
 	},
 	ochoDigitos: function(){
		if (display.innerHTML.length = 8){
			display.innerHTML = display.innerHTML.substring(0,8);
		}
	},
	init: function(){
		this.uno.onclick = function(e){
			Calculadora.borrarMemoria();
			Calculadora.borrarCeroInicial();
     		display.innerHTML = display.innerHTML  + "1";
     		Calculadora.ochoDigitos();
  		}
  		this.dos.onclick = function(e){
  			Calculadora.borrarMemoria();
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "2";
      		Calculadora.ochoDigitos();
  		}
  		this.tres.onclick = function(e){
  			Calculadora.borrarMemoria();
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "3";
      		Calculadora.ochoDigitos();
  		}
  		this.cuatro.onclick = function(e){
  			Calculadora.borrarMemoria();
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "4";
      		Calculadora.ochoDigitos();
  		}
  		this.cinco.onclick = function(e){
  			Calculadora.borrarMemoria();
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "5";
      		Calculadora.ochoDigitos();;
  		}
  		this.seis.onclick = function(e){
  			Calculadora.borrarMemoria();
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "6";
      		Calculadora.ochoDigitos();
  		}
  		this.siete.onclick = function(e){
  			Calculadora.borrarMemoria();
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "7";
      		Calculadora.ochoDigitos();
  		}
  		this.ocho.onclick = function(e){
  			Calculadora.borrarMemoria();
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "8";
      		Calculadora.ochoDigitos();
  		}
  		this.nueve.onclick = function(e){
  			Calculadora.borrarMemoria();
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "9";
      		Calculadora.ochoDigitos();
  		}
  		this.cero.onclick = function(e){
  			Calculadora.borrarMemoria();
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "0";
      		Calculadora.ochoDigitos();
  		}
  		this.punto.onclick = function(e){
  			if (!display.innerHTML.includes('.')){
  				display.innerHTML = display.innerHTML  + ".";
  			}
  		}
  		this.negativo.onclick = function(e){
  			if (!(display.innerHTML.includes('0') || (display.innerHTML.includes('-'))) ){
      			display.innerHTML =  "-" + display.innerHTML;
			}
			else{
				if (display.innerHTML.includes('-')){
     				display.innerHTML = display.innerHTML.replace('-','');
      			}
			}   		
  		}
  		this.reset.onclick = function(e){
      		display.innerHTML = "0";
  			operandoa = 0;
  			operandob = 0;
  			operacion = "";
  			memoria = 0;
  		}
  		this.suma.onclick = function(e){
      		operandoa = display.innerHTML;
      		operacion = "+";
      		display.innerHTML = "";
  		}
  		this.resta.onclick = function(e){
      		operandoa = display.innerHTML;
      		operacion = "-";
      		display.innerHTML = "";
  		}
  		this.multiplicacion.onclick = function(e){
      		operandoa = display.innerHTML;
      		operacion = "*";
      		display.innerHTML = "";
  		}
  		this.division.onclick = function(e){
      		operandoa = display.innerHTML;
      		operacion = "/";
      		display.innerHTML = "";
  		}
  		this.igual.onclick = function(e){
  			if (memoria == 0){
  				operandob = display.innerHTML;
  			}
      		if ((operandob == '') || (operacion == '') || (operandoa == '')){ // si operandob o el operador es igual a '', se asigna 0 y se resetea la operacion 
      			operandoa = 0;
  				operandob = 0;
  				operacion = "";
  				display.innerHTML = "0";
  				res = 0;
      		}
			switch(operacion){
			   case "+":
			     res = parseFloat(operandoa) + parseFloat(operandob);
			     break;
			   case "-":
			       res = parseFloat(operandoa) - parseFloat(operandob);
			       break;
			   case "*":
			     res = parseFloat(operandoa) * parseFloat(operandob);
			     break;
			   case "/":
			     res = parseFloat(operandoa) / parseFloat(operandob);
			     break;
  			}
  			operandoa = res; 
  			memoria = operandob;
  			display.innerHTML = res;
  			if (display.innerHTML.length = 8){
				display.innerHTML = display.innerHTML.substring(0,8);
  			}
  		}

 	},
 	animate: function(){
		this.uno.onmousedown = function (e){
			Calculadora.uno.style.webkitFilter = "brightness(10%)";
		}
		this.uno.onmouseup = function (e){
			Calculadora.uno.style.webkitFilter = "brightness(100%)";
		}
		this.dos.onmousedown = function (e){
			Calculadora.dos.style.webkitFilter = "brightness(10%)";
		}
		this.dos.onmouseup = function (e){
			Calculadora.dos.style.webkitFilter = "brightness(100%)";
		}
		this.tres.onmousedown = function (e){
			Calculadora.tres.style.webkitFilter = "brightness(10%)";
		}
		this.tres.onmouseup = function (e){
			Calculadora.tres.style.webkitFilter = "brightness(100%)";
		}
		this.cuatro.onmousedown = function (e){
			Calculadora.cuatro.style.webkitFilter = "brightness(10%)";
		}
		this.cuatro.onmouseup = function (e){
			Calculadora.cuatro.style.webkitFilter = "brightness(100%)";
		}
		this.cinco.onmousedown = function (e){
			Calculadora.cinco.style.webkitFilter = "brightness(10%)";
		}
		this.cinco.onmouseup = function (e){
			Calculadora.cinco.style.webkitFilter = "brightness(100%)";
		}
		this.seis.onmousedown = function (e){
			Calculadora.seis.style.webkitFilter = "brightness(10%)";
		}
		this.seis.onmouseup = function (e){
			Calculadora.seis.style.webkitFilter = "brightness(100%)";
		}
		this.siete.onmousedown = function (e){
			Calculadora.siete.style.webkitFilter = "brightness(10%)";
		}
		this.siete.onmouseup = function (e){
			Calculadora.siete.style.webkitFilter = "brightness(100%)";
		}
		this.ocho.onmousedown = function (e){
			Calculadora.ocho.style.webkitFilter = "brightness(10%)";
		}
		this.ocho.onmouseup = function (e){
			Calculadora.ocho.style.webkitFilter = "brightness(100%)";
		}
		this.nueve.onmousedown = function (e){
			Calculadora.nueve.style.webkitFilter = "brightness(10%)";
		}
		this.nueve.onmouseup = function (e){
			Calculadora.nueve.style.webkitFilter = "brightness(100%)";
		}
		this.cero.onmousedown = function (e){
			Calculadora.cero.style.webkitFilter = "brightness(10%)";
		}
		this.cero.onmouseup = function (e){
			Calculadora.cero.style.webkitFilter = "brightness(100%)";
		}
		this.suma.onmousedown = function (e){
			Calculadora.suma.style.webkitFilter = "brightness(10%)";
		}
		this.suma.onmouseup = function (e){
			Calculadora.suma.style.webkitFilter = "brightness(100%)";
		}
		this.resta.onmousedown = function (e){
			Calculadora.resta.style.webkitFilter = "brightness(10%)";
		}
		this.resta.onmouseup = function (e){
			Calculadora.resta.style.webkitFilter = "brightness(100%)";
		}
		this.multiplicacion.onmousedown = function (e){
			Calculadora.multiplicacion.style.webkitFilter = "brightness(10%)";
		}
		this.multiplicacion.onmouseup = function (e){
			Calculadora.multiplicacion.style.webkitFilter = "brightness(100%)";
		}
		this.division.onmousedown = function (e){
			Calculadora.division.style.webkitFilter = "brightness(10%)";
		}
		this.division.onmouseup = function (e){
			Calculadora.division.style.webkitFilter = "brightness(100%)";
		}
		this.igual.onmousedown = function (e){
			Calculadora.igual.style.webkitFilter = "brightness(10%)";
		}
		this.igual.onmouseup = function (e){
			Calculadora.igual.style.webkitFilter = "brightness(100%)";
		}
		this.punto.onmousedown = function (e){
			Calculadora.punto.style.webkitFilter = "brightness(10%)";
		}
		this.punto.onmouseup = function (e){
			Calculadora.punto.style.webkitFilter = "brightness(100%)";
		}
		this.negativo.onmousedown = function (e){
			Calculadora.negativo.style.webkitFilter = "brightness(10%)";
		}
		this.negativo.onmouseup = function (e){
			Calculadora.negativo.style.webkitFilter = "brightness(100%)";
		}
		this.reset.onmousedown = function (e){
			Calculadora.reset.style.webkitFilter = "brightness(10%)";
		}
		this.reset.onmouseup = function (e){
			Calculadora.reset.style.webkitFilter = "brightness(100%)";
		}

	}
}


Calculadora.init();
Calculadora.animate();