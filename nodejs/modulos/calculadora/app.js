const funcoesMatematicas = require('./funcoes_matematicas');

// Exemplo de uso:
const resultadoSoma = funcoesMatematicas.somar(5, 3);
console.log('Soma:', resultadoSoma);

const resultadoSubtracao = funcoesMatematicas.subtrair(10, 4);
console.log('Subtração:', resultadoSubtracao);

const resultadoMultiplicacao = funcoesMatematicas.multiplicar(20, 4);
console.log('Multiplicação:', resultadoMultiplicacao);

const resultadoDivisao = funcoesMatematicas.dividir(10, 5);
console.log('Divisão:', resultadoDivisao);

const idadeCalculada = funcoesMatematicas.idade(2008, 2025, true);
console.log('Idade:', idadeCalculada);