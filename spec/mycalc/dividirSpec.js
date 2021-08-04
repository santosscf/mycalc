describe('Suite de testes da funcionalidade divisão da minha calculadora', function(){

	var myCalc = require('../../src/js/myCalc.js');

	it('Deve dividir dois numeros inteiros, 10 e 5, e retornar 2', function(){
		expect(myCalc.dividir(10, 5)).toEqual(2);
	});

	it('Deve dividir dois numeros inteiros, 5 e 2, e retornar 2.5', function(){
		expect(myCalc.dividir(5, 2)).toEqual(2.5);
	});

	it('Deve dividir dois numeros de ponto flutuante, 12.4 e 6.2, e retornar 18.7', function(){
		expect(myCalc.dividir(12.4, 6.2)).toEqual(2);
	});

	it('Deve dividir dois numeros de ponto flutuante, 24.45 e 3.12, e retornar 7.84', function(){
		expect(myCalc.dividir(24.45, 3.12)).toEqual(7.84);
	});
});