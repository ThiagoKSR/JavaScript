let itens = []
let adicionar;
let remover;
let confirmação;
let editar;

while (true) {
    adicionar = prompt('Digite o nome do item a ser adicionado: ');
    itens.push(adicionar);
    let resposta = prompt('Dejesa continuar adicionando? [SIM/NAO]: ');
    confirmação = resposta.toUpperCase();

    if (confirmação === 'NAO') {
        break
    }

}

remover = prompt('Deseja remover algum item? [SIM/NAO]: ');
if (remover.toUpperCase() === 'SIM') {
    let itemRemover = prompt('Digite o número do item a ser removido: ');
    itens.splice(itemRemover - 1, 1);
    console.log(`Item ${itemRemover} removido com sucesso!`);
    console.log('Sua lista atualizada: ');
    console.log('-'.repeat(30));
    console.log(itens);
} else {
    console.log('Nenhum item foi removido.');
}

editar = prompt('Deseja editar algum item? [SIM/NAO]: ');
if (editar.toUpperCase() === 'SIM') {
    let itemEditar = prompt('Digite o número do item a ser editado: ');
    let novoItem = prompt('Digite o nome do novo item: ')
    itens.splice(itemEditar - 1, 1, novoItem);
    console.log(`Item ${itemEditar} editado com sucesso!`);
    console.log('Sua lista atualizada: ');
    console.log('-'.repeat(30));
    console.log(itens);
}else {
    console.log('Nenhum item foi editado.');
}
console.log('Lista encerrada!');
console.log('Sua lista: ');
console.log('-'.repeat(30));
console.log(itens);
