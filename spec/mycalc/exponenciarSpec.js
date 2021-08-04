describe('Suite de testes da funcionalidade exponenciação da minha calculadora', function(){

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve exponenciar dois numeros interios, 2 e 5, e retornar 32', function(){
		expect(myCalc.exponenciar(2, 5)).toEqual(32);
	});

	it('Deve exponenciar dois numeros interios, 5 e 3, e retornar 125', function(){
		expect(myCalc.exponenciar(5, 3)).toEqual(125);
	});

	it('Deve exponenciar dois numeros de ponto flutuante, 5.5 e 3.4, e retornar 329.03', function(){
		expect(myCalc.exponenciar(5.5, 3.4)).toEqual(329.03);
	});

	it('Deve exponenciar dois numeros de ponto flutuante, 5.55 e 3.45, e retornar 369.67', function(){
		expect(myCalc.exponenciar(5.55, 3.45)).toEqual(369.67);
	});
});