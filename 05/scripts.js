const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const operacao = "agendar";

const paciente = "Igor";


function processoDeAtendimento(fila, TipoOperacao, nomeDoPaciente) {


    if (TipoOperacao === "agendar") {

        agendarPaciente(fila, nomeDoPaciente);

    } else if (TipoOperacao === "atender") {

        atenderPaciente(fila, nomeDoPaciente);

    } else if (TipoOperacao === "cancelar") {

        cancelarPaciente(fila, nomeDoPaciente);

    }

    function agendarPaciente(fila, nomeDoPaciente) {

        fila.splice(fila.length, 0, nomeDoPaciente);

        return console.log(`${fila.join(", ")}`);

    }

    function atenderPaciente(fila) {

        fila.splice(0, 1,);

        return console.log(`${fila.join(", ")}`);

    }

    function cancelarPaciente(fila, nomeDoPaciente) {

        localizacaoDoPaciente = fila.indexOf(nomeDoPaciente);

        fila.splice(0, localizacaoDoPaciente + 1,);

        return console.log(`${fila.join(", ")}`);

    }

}
processoDeAtendimento(pacientes, operacao, paciente);