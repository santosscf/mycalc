describe('Suite de testes da funcionalidade radiciação da minha calculadora', function(){

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve radiciar um número inteiro, 100 e null, e retornar 10', function(){
		expect(myCalc.radiciar(100, '')).toEqual(10);
	});

	it('Deve radiciar dois números inteiros, 5 e 2, e retornar ERROR', function(){
		expect(myCalc.radiciar(5, 2)).toEqual('ERROR');
	});

	it('Deve radiciar dois numeros de ponto flutuante, -5 e null, e retornar ERROR', function(){
		expect(myCalc.radiciar(-5, '')).toEqual('ERROR');
	});

	it('Deve radiciar um numero de ponto flutuante, 2.25 e null, e retornar 1.5', function(){
		expect(myCalc.radiciar(2.25, '')).toEqual(1.5);
	});
});