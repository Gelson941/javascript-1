/**
 * Função que calcula a soma de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma dos dois números.
 */
function soma(a, b) {
  return a + b;
}

/**
 * Função que calcula a multiplicação de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A multiplicação dos dois números.
 */
function multiplicacao(a, b) {
  return a * b;
}

/**
 * Função que calcula a divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A divisão dos dois números.
 */
function divisao(a, b) {
  return a / b;
}

/**
 * Função que calcula a subtração de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A subtração dos dois números.
 */
function subtracao(a, b) {
  return a - b;
}

/**
 * Função que calcula o resto da divisão de 2 números
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O resto da divisão dos dois números.
 */
function modulo(a, b) {
  return a % b;
}

/**
 * Função que retorna o maior número entre 2
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O maior número entre os dois.
 */
function max(a, b) {
  return Math.max(a, b);
}

/**
 * Função que concatena 2 strings utilizando template strings
 * @param {string} a - A primeira string.
 * @param {string} b - A segunda string.
 * @returns {string} As duas strings concatenadas.
 */
function strConcat(a, b) {
  return `${a}${b}`;
}

/**
 * Função que implementa o controle de fluxo
 * @param {number} numero - O número em questão.
 * @returns {string} O resultado do controle de fluxo.
 */
function retornaNumero(numero) {
  if (numero > 10) {
    return "Maior que 10";
  } else if (numero === 10) {
    return "Igual a 10";
  } else {
    return "Menor que 10";
  }
}

/**
 * Função que valida se o número em questão é positivo
 * @param {number} num - Número em questão
 * @returns {boolean} Retorna true para números positivos.
 */
function ehPositivo(num) {
  return num > 0;
}

module.exports = {
  soma,
  multiplicacao,
  divisao,
  subtracao,
  modulo,
  max,
  strConcat,
  retornaNumero,
  ehPositivo
};
