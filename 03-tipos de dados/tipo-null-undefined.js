let estudante;

if (estudante === undefined){
    console.log('O tipo dessa variável é indefinido');
}


//comportamento de null em operações matemáticas
const valorNulo = null;
console.log(valorNulo + 10); //10, pois null se comporta como zero 


//comportamento de undefined em operações matemáticas
let numero;
console.log(numero + 10); //NaN, pois agora trata-se de uma operação matemática mal formada

//testando o tipo de NaN
if (typeof NaN == 'number'){
    console.log('->NaN é um numero do tipo primitivo');
    console.log(typeof NaN);
}

//testando qual o tipo de null
console.log("O tipo de null é " + typeof null);
