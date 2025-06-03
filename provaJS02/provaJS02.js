let idade = Number(prompt("Informe sua idade: ")) ;
let registro = prompt("Já possui registro?: [SIM/NAO]") ; 
let verificarIdade = (idade >= 18) ? "Maior de idade" : "Menor de idade" ;
registroFull = false;
mensagem = "";

if (idade >= 18 && registro == "SIM")
    registroFull = true

else {
    registroFull = false
}

switch (registroFull) {
    case true:
        alert(`Boas vindas`)
        mensagem = "Registro completo";
        break;
    case false:
        mensagem = "Registro incompleto";
        alert(`ACESSO LIMITADO!`)
        break
    default:
        mensagem = "Status desconhecido"
        break
}

alert(mensagem)
