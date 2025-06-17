let itens = []
let adicionar;
let remover;
let confirmação;

while (true) {
    adicionar = prompt('Digite o nome do item a ser adicionado: ');
    itens.push(adicionar);
    let resposta = prompt('Dejesa continuar adicionando? [SIM/NAO]: ');
    confirmação = resposta.toUpperCase();

    if (confirmação === 'NAO') {
        break
    }

}

console.log('Lista encerrada!')
console.log('Sua lista: ')
console.log('-' * itens.length)
console.log(itens)