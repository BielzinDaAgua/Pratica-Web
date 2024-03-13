class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const novaDisciplina = new Disciplina(codigo, nome);
        this.repositorio.inserir(novaDisciplina);
        return novaDisciplina;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.pesquisarPorCodigo(codigo);
    }

    atualizar(codigo, novoNome) {
        const disciplinaAtual = this.pesquisarPorCodigo(codigo);
        if (disciplinaAtual) {
            disciplinaAtual.nome = novoNome;
            this.repositorio.atualizar(disciplinaAtual);
        } else {
            throw new Error('Disciplina não encontrada!');
        }
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    inserirAlunoNaDisciplina(disciplina, aluno) {
        disciplina.inserirAluno(aluno);
        this.repositorio.atualizar(disciplina);
    }
}