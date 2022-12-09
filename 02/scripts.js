const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

const dividirGrupos = (lista, tamanho) => {

    let numeroGrupo = 1;

    for (let i = 0; i < lista.length; i += tamanho) {
        const grupo = `Grupo ${numeroGrupo}: ${lista.slice(i, (i + tamanho)).join(", ")}`;
        console.log(grupo);
        numeroGrupo++
    }
}

dividirGrupos(nomes, tamanhoDoGrupo);