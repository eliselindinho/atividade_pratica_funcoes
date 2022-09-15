/*
Crie um arquivo chamado funcoes1_js.html, e vamos fazer um algoritmo:

a. Receba do usuário através do comando prompt um CPF (apenas números), e atribua isso a uma variável.

b. Crie uma função para verificar se o CPF digitado contém 11 dígitos, caso não contenha retorne false true caso retorne.

c. Crie uma função para formatá-lo de acordo com a máscara xxx.xxx.xxx-xx

d. Crie uma última função para exibir o CPF formatado através de um alert para o cliente caso a função de validação de dígitos retorne true.

*/
function exibirCPF(cpf) {
    alert("Seu cpf é: " + cpf);
  }
  function mascaraCPF(cpf) {
    let digitos = cpf.split("");
    let cpfComMascara =
      digitos[0] +
      digitos[1] +
      digitos[2] +
      "." +
      digitos[3] +
      digitos[4] +
      digitos[5] +
      "." +
      digitos[6] +
      digitos[7] +
      digitos[8] +
      "-" +
      digitos[9] +
      digitos[10];
      return cpfComMascara;
  }

function verificaCPF(cpf) {
  if (cpf.length === 11) {
    return true;
  } else {
    return false;
  }
}

let cpfDigitado = prompt("Digite o seu CPF ");
let cpfValido = verificaCPF(cpfDigitado);
if (cpfValido) {
  let cpfFormatado = mascaraCPF(cpfDigitado);
  exibirCPF(cpfFormatado);
}
