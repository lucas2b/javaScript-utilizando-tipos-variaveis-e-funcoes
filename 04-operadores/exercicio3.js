// 1. Crie variáveis que armazenem o valor do saldo, de depósito e
// de um saque de uma conta bancária, depois realize operações de adição e
// subtração entre eles utilizando uma variável chamada operacao,
// considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

const prompt = require("prompt-sync")();

let saldo = 100;
let opcaoMenu;
//habilitar ou desabilitar teste
if (false) {
  while (opcaoMenu != "4") {
    opcaoMenu = prompt(
      "1- Depositar, 2 - Sacar, 3 - Verificar Saldo, 4 - Sair: "
    );

    switch (opcaoMenu) {
      case "1":
        const valorDeposito = prompt("Digitar o valor de depósito: ");
        saldo += Number.parseInt(valorDeposito);
        break;
      case "2":
        const valorSaque = prompt("Digitar o valor do saque: ");
        if (saldo < Number.parseInt(valorSaque)) {
          console.log("Conta não possui saldo suficiente");
        } else {
          saldo -= valorSaque;
        }
        break;

      case "3":
        break;

      case "4":
        break;

      default:
        break;
    }

    verificarSaldo();
  }
  console.log("Fim do banco.");
}

function verificarSaldo() {
  console.log(`Saldo: ${saldo}`);
}

// 2. Crie uma variável numérica com um valor.
// Utilize um operador ternário para verificar se esse valor é par ou ímpar.
// Exiba o resultado no console.
const numero = 10;
const isPar = numero % 2 == 0 ? true : false;
console.log(isPar);

// 3.Considere uma situação em que você está verificando se um usuário está logado e
// tem permissão de administrador para acessar determinada funcionalidade.
// Utilize variáveis booleanas para simular essas condições e use o operador AND
// para verificar se ambas são verdadeiras.
const isLogado = true;
const isAdmin = true;

if (isLogado && isAdmin) {
  console.log("Usuário tem permissão");
} else {
  console.log("Usuário não tem permissão");
}

//4. Declare duas variáveis booleanas e use o operador OR para
//verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
const a1 = true;
const a2 = false;
if (a1 || a2) {
  console.log("a1 ou a2 é verdadeira");
}

//5.Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show.
// Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize
// estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

//exercício bobinho, não farei
