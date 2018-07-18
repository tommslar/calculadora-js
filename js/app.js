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
 	borrarCeroInicial: function(){
 		if (display.innerHTML.startsWith("0") && (!display.innerHTML.includes('.')) ){
			display.innerHTML = display.innerHTML.replace(0,'');
		}
 	},
 	ochoDigitos: function(){
		if (display.innerHTML.length = 8)
			display.innerHTML = display.innerHTML.substring(0,8);
	},
	init: function(){
		this.uno.onclick = function(e){
			Calculadora.borrarCeroInicial();
     		display.innerHTML = display.innerHTML  + "1";
     		Calculadora.ochoDigitos();
  		}
  		this.dos.onclick = function(e){
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "2";
      		Calculadora.ochoDigitos();
  		}
  		this.tres.onclick = function(e){
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "3";
      		Calculadora.ochoDigitos();
  		}
  		this.cuatro.onclick = function(e){
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "4";
      		Calculadora.ochoDigitos();
  		}
  		this.cinco.onclick = function(e){
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "5";
      		Calculadora.ochoDigitos();
  		}
  		this.seis.onclick = function(e){
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "6";
      		Calculadora.ochoDigitos();
  		}
  		this.siete.onclick = function(e){
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "7";
      		Calculadora.ochoDigitos();
  		}
  		this.ocho.onclick = function(e){
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "8";
      		Calculadora.ochoDigitos();
  		}
  		this.nueve.onclick = function(e){
  			Calculadora.borrarCeroInicial();
      		display.innerHTML = display.innerHTML  + "9";
      		Calculadora.ochoDigitos();
  		}
  		this.cero.onclick = function(e){
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
      		operandob = display.innerHTML;
      		if ((operandob = '') || (operacion = '')){ // si operandob o el operador es igual a '', se asigna 0 y se resetea la operacion 
      			operandoa = 0;
  				operandob = 0;
  				operacion = "";
  				display.innerHTML = "0";
      		}
      		var res = 0;
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
  			operandoa = 0;
  			operandob = 0;
  			operacion = "";
  			display.innerHTML = res;
  			Calculadora.ochoDigitos();
  		}

 	}
}


Calculadora.init();