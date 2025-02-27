//expressão de funções
//não possui hoisting
const isEstudanteReprovado = function (media, faltas) {
  return media < 7 || faltas > 4 ? true : false;
};

console.log(isEstudanteReprovado(8, 2)); //false
console.log(isEstudanteReprovado(8, 5)); //true
