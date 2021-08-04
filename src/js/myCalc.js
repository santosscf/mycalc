var myCalc = {
	somar: function(n1, n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);

		var resultado = n1 + n2;

		return Math.round(resultado*100) / 100;
	},

	subtrair: function(n1, n2){
		var resultado = n1 - n2;

		return Math.round(resultado*100) / 100;
	},

	multiplicar: function(n1, n2){
		var resultado = n1 * n2;

		return Math.round(resultado*100) / 100;
	},

	dividir: function(n1, n2){
		var resultado = n1 / n2;

		return Math.round(resultado*100) / 100;
	},

	exponenciar: function(n1, n2){
		var resultado = n1 ** n2;

		return Math.round(resultado*100) / 100;
	},

	radiciar: function(n1, n2){
		if (n1 < 0 || n2 != ''){
			return 'ERROR';
		} 

		var resultado = Math.sqrt(n1);
		return Math.round(resultado*100) / 100;
	}
}

// usado na função 'require' do NodeJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = myCalc;
}