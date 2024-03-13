class DisciplinaControlador {
    constructor() {
        this.servico = new DisciplinaServico();
    }

    inserir() {
        const codigoElemento = document.querySelector("#codigoDisciplina");
        const nomeElemento = document.querySelector("#nomeDisciplina");
        try {
            this.servico.inserir(codigoElemento.value, nomeElemento.value);
            console.log(`Nova disciplina registrada: ${nomeElemento.value}`);
        } catch (error) {
            console.error(error.message);
        }
    }

    pesquisarPorCodigo() {
        const codigoElemento = document.querySelector("#codigoPesquisaDisciplina");
        const disciplinaEncontrada = this.servico.pesquisarPorCodigo(codigoElemento.value);
        if (disciplinaEncontrada) {
            console.log(`Disciplina encontrada: ${disciplinaEncontrada.nome}`);
        } else {
            console.log("Disciplina não encontrada.");
        }
    }

    atualizar() {
        const codigoElemento = document.querySelector("#codigoAtualizarDisciplina");
        const nomeElemento = document.querySelector("#novoNomeDisciplina");
        try {
            this.servico.atualizar(codigoElemento.value, nomeElemento.value);
            console.log("Disciplina atualizada com sucesso.");
        } catch (error) {
            console.error(error.message);
        }
    }

    remover() {
        const codigoElemento = document.querySelector("#codigoRemoverDisciplina");
        try {
            this.servico.remover(codigoElemento.value);
            console.log("Disciplina removida com sucesso.");
        } catch (error) {
            console.error(error.message);
        }
    }

    adicionarAlunoNaDisciplina() {
        const codigoDisciplinaElemento = document.querySelector("#codigoAdicionarAluno");
        const nomeAlunoElemento = document.querySelector("#nomeAlunoDisciplina");
        const idadeAlunoElemento = document.querySelector("#idadeAlunoDisciplina");
        const matriculaAlunoElemento = document.querySelector("#matriculaAlunoDisciplina");

        try {
            const disciplina = this.servico.pesquisarPorCodigo(codigoDisciplinaElemento.value);
            if (!disciplina) {
                throw new Error('Disciplina não encontrada!');
            }

            const aluno = new Aluno(nomeAlunoElemento.value, idadeAlunoElemento.value, matriculaAlunoElemento.value);
            this.servico.inserirAlunoNaDisciplina(disciplina, aluno);
            console.log(`Aluno ${aluno.nome} adicionado à disciplina ${disciplina.nome}`);
        } catch (error) {
            console.error(error.message);
        }
    }
}
