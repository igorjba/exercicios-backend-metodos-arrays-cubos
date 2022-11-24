const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

const qntDeCarrosCapturados = 3;

function localizarECapturarCarro(lista, localizacao) {

    let capturados = lista.slice(localizacao, localizacao + qntDeCarrosCapturados);

    capturados = capturados.join(" - ");

    return console.log(capturados);

}

localizarECapturarCarro(nomes, posicao);