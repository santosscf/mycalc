describe('Suite de testes da funcionalidade multiplicação da minha calculadora', function(){

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve multiplicar dois numeros interios, 2 e 5, e retornar 10', function(){
		expect(myCalc.multiplicar(2, 5)).toEqual(10);
	});

	it('Deve multiplicar dois numeros interios, 5 e 3, e retornar 15', function(){
		expect(myCalc.multiplicar(5, 3)).toEqual(15);
	});

	it('Deve multiplicar dois numeros de ponto flutuante, 5.5 e 3.4, e retornar 18.7', function(){
		expect(myCalc.multiplicar(5.5, 3.4)).toEqual(18.7);
	});

	it('Deve multiplicar dois numeros de ponto flutuante, 5.55 e 3.45, e retornar 19.15', function(){
		expect(myCalc.multiplicar(5.55, 3.45)).toEqual(19.15);
	});
});