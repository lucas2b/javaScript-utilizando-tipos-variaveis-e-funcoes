// 1. Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) 
// e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
const nome = 'lucas'
const idade = 38;
const brasileiro = true;
const lista = [1, 2, 3];
const objeto = {nome: nome, idade: idade};

console.log('Exercício 1:');
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof brasileiro);
console.log(typeof lista);
console.log(typeof objeto);

// 2. Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. 
// Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings.
// Por fim, imprima os resultados obtidos no console.
const primeiroNome = 'lucas';
const sobrenome = 'bonine';
const nomeCompleto = primeiroNome + ' ' + sobrenome;

console.log('\nExercício 2:');
console.log(nomeCompleto);
console.log(`${primeiroNome} ${sobrenome}`);

//3. Declare duas variáveis, uma contendo um número e outra contendo uma string. 
// Em seguida, combine-as em uma terceira variável usando template strings para 
// montar uma frase e exiba o resultado no console.
const numero = 10;
const palavra = 'palavra';
const terceiraVariavel = `a palavra formada é: "${palavra}" e o numero é: "${numero}"`;
console.log('\nExercício 3:');
console.log(terceiraVariavel);

//4. Crie uma variável inicializada com um valor de qualquer tipo e, em seguida,
// reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

//5. Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. 
// Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e
// analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
console.log('\nExercício 5:');

var var1 = 10;
if(true){
    var var2 = 20;
    console.log(var1, var2);
}
console.log(var1, var2);

let let1 = 10;
if(true){
    let let2 = 20;
    console.log(let1, let2);
}
//console.log(let1, let2); //ocasiona um erro de undefined pois o escopo de let2 é de bloco e não acessível fora dele

// 6. Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura 
// condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva
// ou não dependendo do valor da variável.
console.log('\nExercício 6:');

const chovendo = true;
if(chovendo){
    console.log('necessário levar um guarda-chuva');
}