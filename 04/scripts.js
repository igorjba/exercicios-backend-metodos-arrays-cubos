const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function processoDeAtendimento(fila, tipoOperacao, nomePaciente) {
    if (tipoOperacao === "atender") {
        fila.shift();
    }
    if (tipoOperacao === "agendar") {
        fila.push(nomePaciente);
    }

    console.log(fila.join(", "));
}
processoDeAtendimento(pacientes, "agendar", "Igor");