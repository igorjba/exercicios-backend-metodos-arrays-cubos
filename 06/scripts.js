const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

const bichinho = "Lessie";

function acharDonoDoPet(lista, pet) {

    let dono

    let achou = false;

    for (let i = 0; i < lista.length; i++) {


        if (lista[i].pets.includes(pet)) {
            achou = true
            dono = lista[i].nome;
            break
        }

    }
    if (achou === true) {

        return console.log(`O dono(a) do(a) ${pet} é o(a) ${dono}`);

    } else {

        return console.log(`Que pena ${pet}, não encontramos seu dono(a)`);

    }
}

acharDonoDoPet(usuarios, bichinho);