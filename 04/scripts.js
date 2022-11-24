const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const operacao = "atender";

const paciente = "Igor";


function processoDeAtendimento(fila, TipoOperacao, nomeDoPaciente) {
    if (TipoOperacao === "agendar") {

        fila.splice(fila.length, 0, nomeDoPaciente);

        return console.log(`${fila.join(", ")}`);

    } else if (TipoOperacao === "atender") {

        fila.splice(0, 1,);

        return console.log(`${fila.join(", ")}`);

    }
}
processoDeAtendimento(pacientes, operacao, paciente);