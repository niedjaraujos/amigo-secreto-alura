const input = document.querySelector('input');

let listaNomes = [];
let mensagemErro = 'Por favor, insira um nome.';

function adicionarAmigo() {
    let nomeAmigo = input.value
    let tagUl = document.querySelector('#listaAmigos')
    let novaLista = document.createElement('li')
    if (nomeAmigo !== '') {
        novaLista.textContent = nomeAmigo;
        tagUl.appendChild(novaLista)
        listaNomes.push(nomeAmigo)
    }
    else {
        document.querySelector('p').textContent = mensagemErro
    }
    input.value = '';
    console.log(listaNomes)
}
function sortearAmigo() {
    let nomeSorteado = Math.floor(Math.random() * listaNomes.length)
    let amigoSorteado = listaNomes[nomeSorteado]


    document.querySelector('p').textContent = `O seu amigo secreto é ${amigoSorteado}`
    console.log(listaNomes)
}





