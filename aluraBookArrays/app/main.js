let livros = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json' ;

getBuscaLivrosDaAPI();

async function getBuscaLivrosDaAPI() {
    const res = await fetch(endPointAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto);
}

