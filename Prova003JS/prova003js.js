let lista = []

while (true) {
    const nome = prompt('Digite um nome, ou [SAIR] para sair: ').toUpperCase();
    if (nome === null || nome === 'SAIR') {
         console.log('PROGRAMA ENCERRADO!');
        break
    
    }

    lista.push(nome);

    console.log('---NOMES ADICIONADOS À LISTA---')

    for (let i = 0; i < lista.length; i++) {
        console.log(`${i + 1}. ${lista[i]}`);
    }
    console.log('---------------------------------')

    
}

for (const nomeNaLista of lista) {
        console.log(`Bem vindo, ${nomeNaLista}`)
}
