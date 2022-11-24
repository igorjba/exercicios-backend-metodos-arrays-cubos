const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function dividirGrupos(nomesDoGrupo, qntDePessoasNoGrupo) {
    let nomesParte1 = nomesDoGrupo.slice(0, qntDePessoasNoGrupo);
    let nomesParte2 = nomesDoGrupo.slice(qntDePessoasNoGrupo);

    nomesParte1 = nomesParte1.join(", ");
    nomesParte2 = nomesParte2.join(", ");



    console.log(`Grupo 1: ${nomesParte1}.`);
    console.log(`Grupo 2: ${nomesParte2}.`);
}

dividirGrupos(nomes, tamanhoDoGrupo);