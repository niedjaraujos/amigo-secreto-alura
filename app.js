let amigos = [];
let mensagem = document.querySelector('p')

function adicionarAmigo() {
    const input = document.querySelector('input');
    let nomeAmigo = input.value.trim() // limpa espaços
    if (nomeAmigo !== '') {
        amigos.push(nomeAmigo)
        renderizarLista()
        mensagem.textContent = ''
    }
    else {
        mensagem.textContent = 'Por favor, digite um nome.';
    }
    input.value = '';

    console.log(amigos)
}
function renderizarLista() {
    const lista = document.querySelector('#resultado')
    lista.innerHTML = ""

    for (let i = 0; i < amigos.length; i++) {
        let novoAmigo = document.createElement('li')
        novoAmigo.textContent = amigos[i];

        lista.appendChild(novoAmigo)
    }
}
function sortearAmigo() {
    if (amigos.length == '') {
        mensagem.textContent = 'Digite os nome dos seus amigos!';
    } else {
        let nomeSorteado = Math.floor(Math.random() * amigos.length)
        let amigoSorteado = amigos[nomeSorteado]
        document.querySelector('#resultado').textContent = `O seu amigo secreto é ${amigoSorteado}`
    }
    console.log(amigos)
}





