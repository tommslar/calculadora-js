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
    operandoa:0,
 	operandob:0,
 	operacion:'',

	init: function(){
		this.uno.onclick = function(e){
     		display.innerHTML = display.innerHTML  + "1";
  		}
  		this.dos.onclick = function(e){
      		display.innerHTML = display.innerHTML  + "2";
  		}
  		this.tres.onclick = function(e){
      		display.innerHTML = display.innerHTML  + "3";
  		}
  		this.cuatro.onclick = function(e){
      		display.innerHTML = display.innerHTML  + "4";
  		}
  		this.cinco.onclick = function(e){
      		display.innerHTML = display.innerHTML  + "5";
  		}
  		this.seis.onclick = function(e){
      		display.innerHTML = display.innerHTML  + "6";
  		}
  		this.siete.onclick = function(e){
      		display.innerHTML = display.innerHTML  + "7";
  		}
  		this.ocho.onclick = function(e){
      		display.innerHTML = display.innerHTML  + "8";
  		}
  		this.nueve.onclick = function(e){
      		display.innerHTML = display.innerHTML  + "9";
  		}
  		this.cero.onclick = function(e){
      		display.innerHTML = display.innerHTML  + "0";
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
  		}

 	}
}

Calculadora.init();