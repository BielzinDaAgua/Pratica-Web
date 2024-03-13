class DisciplinaRepositorio {
    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        if (this.disciplinas.find(d => d.codigo === disciplina.codigo)) {
            throw new Error('Disciplina já cadastrada!');
        }
        this.disciplinas.push(disciplina);
    }

    pesquisarPorCodigo(codigo) {
        return this.disciplinas.find(d => d.codigo === codigo);
    }

    atualizar(disciplinaAtualizada) {
        const index = this.disciplinas.findIndex(d => d.codigo === disciplinaAtualizada.codigo);
        if (index !== -1) {
            this.disciplinas[index] = disciplinaAtualizada;
        } else {
            throw new Error('Disciplina não encontrada!');
        }
    }

    remover(codigo) {
        const index = this.disciplinas.findIndex(d => d.codigo === codigo);
        if (index !== -1) {
            this.disciplinas.splice(index, 1);
        } else {
            throw new Error('Disciplina não encontrada!');
        }
    }
}