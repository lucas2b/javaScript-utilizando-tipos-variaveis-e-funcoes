//não possui hoisting
//prática e mais curta
//utilizadas em callback
const isEstudanteReprovado = (media, faltas) =>
  media < 7 || faltas > 4 ? true : false;

const exibeNome = (nome) => console.log(nome);

console.log(isEstudanteReprovado(8, 2)); //false
console.log(isEstudanteReprovado(8, 5)); //true

exibeNome("lucas");
