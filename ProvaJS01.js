let num1 = Number(prompt("Digite o valor do numerador: "));
let num2 = Number(prompt("Digite o valor do denominador: "));
let atribuir = Number(prompt("Digite um valor para incrementar, decrementar: "));

let soma = num1 + num2;
soma += atribuir;

let subtracao = num1 - num2;
subtracao -= atribuir;

let produto = num1 * num2;
produto *= atribuir;

let divisao = num1 / num2  //Se dividir por ZERO, ou INCREMENTAR 0, vai dar erro. Ainda não consegui usar condicionais em JS corretamente =( 
divisao /= atribuir

let resto = num1 % num2  //Se incrementar ZERO, também vai dar erro. Assim que aprender condicionais em JS, eu retorno pra resolver esse Bug. =(
resto %= atribuir

console.log(`A soma entre ${num1} e ${num2} é: ${num1 + num2}. Incrementada em: ${atribuir} é: ${soma}`);
console.log(`A subtração entre ${num1} e ${num2} é: ${num1 - num2}. Incrementada em: ${atribuir} é: ${subtracao}`);
console.log(`A multiplicação entre ${num1} e ${num2} é: ${num1 * num2}. Incrementada em: ${atribuir} é: ${produto}`);
console.log(`A divisão entre ${num1} e ${num2} é: ${num1 / num2}. Incrementada em: ${atribuir} é: ${divisao}`);
console.log(`O resto da divisão entre ${num1} e ${num2} é: ${num1 % num2}. Incrementada em: ${atribuir} é: ${resto}`);


