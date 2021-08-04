// Autora Stefany Caroline Ferreira dos Santos
// Java Script - Calculadora


//-------------ATIVANDO OS BOTÕES C/ O TECLADO----------------


$(document).ready(function(){

	$("body").keydown(function(){
	    var x = event.keyCode;
	    console.log(x);
	    switch (x) {
	    	case 8:
	    	case 46:
	    		$("#buttonCE").click();
	    		break;
	    }
	});


    $("body").keypress(function(){
	    var x = event.keyCode;
	    console.log(x);
	    switch (x) {
	    	case 40:
	    	case 41:
	    		$("#buttonParenteses").click();
	    		break;
	    	case 44:
	    		$("#buttonVirgula").click();
	    		break;
	    	case 13:
	    	case 61:
	    		$("#buttonIgual").click();
	    		break;
	    	case 37:
	    		$("#buttonPorcentagem").click();
	    		break;
	    	case 47:
	    		$("#buttonDivisao").click();
	    		break;
	    	case 42:
	    		$("#buttonMultiplicacao").click();
	    		break;
	    	case 43:
	    		$("#buttonSoma").click();
	    		break;
	    	case 45:
	    		$("#buttonSubtracao").click();
	    		break;
	    	case 48:
	    		$("#button0").click();
	    		break;
	    	case 49:
	    		$("#button1").click();
	    		break;
	    	case 50:
	    		$("#button2").click();
	    		break;
	    	case 51:
	    		$("#button3").click();
	    		break;
	    	case 52:
	    		$("#button4").click();
	    		break;
	    	case 53:
	    		$("#button5").click();
	    		break;
	    	case 54:
	    		$("#button6").click();
	    		break;
	    	case 55:
	    		$("#button7").click();
	    		break;
	    	case 56:
	    		$("#button8").click();
	    		break;
	    	case 57:
	    		$("#button9").click();
	    		break;
	    }
	});
});