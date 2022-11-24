const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function formatarFrutas(listaDeFrutas) {

    let frutasReverse = listaDeFrutas.reverse();

    let frutasReverseJuntas = frutasReverse.join();

    let arrayfrutasReverseJuntas = frutasReverseJuntas.split(",");

    let frutasOriginal = arrayfrutasReverseJuntas.reverse();

    let resto1frutas = frutasOriginal.splice(0, 1);

    let resto2frutas = frutasOriginal.splice(frutasOriginal.length - 1, 1);

    frutasOriginal === frutasOriginal.splice(frutasOriginal.length, 0, "Melão");



    console.log(frutasReverseJuntas);
    console.log(frutasOriginal);

}

formatarFrutas(frutas);

