const fs = require('fs');

console.log('console 1');

let conteudoArquivo;
function processaArquivo(err, contents){
    console.log(err, String(contents));
    conteudoArquivo = String(contents);
}

fs.readFile('./arquivo1.txt', processaArquivo);



console.log('console 2');
console.log('console 3');

console.log(conteudoArquivo); //undefined

console.log('console 4');