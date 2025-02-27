const notaFinal = 8
const faltas = 4;
const advertencias = 0;

if(notaFinal < 7 || faltas > 4){
    console.log("aluno reprovado");
}else{
    console.log("aluno aprovado");
}


//Truphy e Falsy
// "0" é um valor Falsy, ou seja, avalia para False.
if(!advertencias){ //negando o falsy
    console.log("aluno ganhou um bônus pois não tem advertências");
}