//1. Crie uma função que receba o nome de uma pessoa como argumento e retorne
// uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
function saudarPessoa(nome) {
  return `olá ${nome}`;
}

console.log("Exercício 1:");
console.log(saudarPessoa("lucas"));

//2. Crie uma função que receba a idade de uma pessoa e
// retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

console.log("Exercício 2:");
function isMaiorDeIdade(idade) {
  return idade >= 18;
}
console.log(isMaiorDeIdade(18));

// 3. Crie uma função que receba uma string e verifique se é um palíndromo
// (uma palavra que é lida da mesma forma de trás para frente) utilizando o
// método de string reverse(). Retorne true se for um palíndromo e false caso contrário.
// Imprima o resultado no console.

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

console.log("Exercício 3:");
console.log(isPalindrome("arara"));
console.log(isPalindrome("exemplo"));

// 4. Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles.
// Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior.
// Imprima o maior valor no console.
function verificarMaiorNumero(...numeros) {
  let maiorAtual = Number.MIN_VALUE;

  //arrow function
  const retornarMaior = (num) => {
    if (num > maiorAtual) {
      maiorAtual = num;
    }
  };

  numeros.forEach(retornarMaior);
  return maiorAtual;
}

console.log("Exercício 4:");
console.log(verificarMaiorNumero(10, 5, 6, 100, 3, 400));

//5. Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente.
// A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
console.log("Exercício 5:");
const calculaPotencia = (base, expoente) => base ** expoente;
console.log(calculaPotencia(2, 2));
