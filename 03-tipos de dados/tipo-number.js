const primeiroBi = 4; 
const segundoBi = 6.7;
const terceiroBi = 8.2;
const quartoBi = '5';

const somaTotal = primeiroBi + segundoBi + terceiroBi + quartoBi; //concatena a string ao final '5'. Não realiza a conversão
console.log(`Soma total com valor "5" concatenado: ${somaTotal}`);

const somaTotalComStringConvertida = primeiroBi + segundoBi + terceiroBi + Number.parseInt(quartoBi);
console.log(`Soma total realizando conversão de String para Number: ${somaTotalComStringConvertida}`);

const mediaAnual = (somaTotalComStringConvertida / 4).toFixed(2); //arredondado para 2 casas decimais
console.log(`Média anual com arredondamento de 2 casas decimais: ${mediaAnual}`);


//exemplos NaN (Not a Number)
console.log(5 * 'a'); // NaN

//Realiza coerção implícita, pois para a multiplicação só pode existir números.
//Já no caso da soma anterior, existe concatenação de um número.
console.log(5 * '5'); 
