const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function localizarECapturarCarro(carros, posicao) {
    console.log(carros.splice(posicao, 3).join(" - "));
}

localizarECapturarCarro(nomes, posicao);