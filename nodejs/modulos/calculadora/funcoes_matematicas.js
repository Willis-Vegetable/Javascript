function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error('Divisão por zero não permitida');
    }
    return a / b;
}

function idade(anoNascimento, anoAtual, aniversariojaPassou) {
    if (aniversariojaPassou = false) {
        return anoAtual - anoNascimento - 1;
    } else {
        return anoAtual - anoNascimento;
    }
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    idade
};