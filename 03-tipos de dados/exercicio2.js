// 1. Crie uma variável contendo uma frase. 
// Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

const frase1 = 'Essa é a primeira frase';
console.log(frase1.length);
console.log(frase1.toUpperCase());

// 2. Declare duas variáveis, uma inicializada com valor null e
// outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
const variavelNull = null;
let variavelSemValor;

console.log(variavelNull);
console.log(variavelSemValor);

// 3. Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes
// tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
let numero = 10;
let palavra = 'palavra';
let verdade = true;
console.log(`${numero} ${palavra} ${verdade}`);

//4. Crie uma variável numérica e uma string. Faça a conversão da variável 
// numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
let numero10 = 10;
let numero11 = '11';

let numero10String = numero10.toString();
let numero11Number = Number.parseInt(numero11);

console.log(typeof numero10String);
console.log(typeof numero11Number);

// 5. Crie uma variável com uma string e utilize métodos de manipulação de strings, 
// como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

let palavra1 = 'palavra';
palavra1 = palavra1.slice(1,2);
console.log(palavra1);