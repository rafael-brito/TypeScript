export class Negociacoes {
    negociacoes = [];
    adicionarNegociacao(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listarNegociacoes() {
        return this.negociacoes;
    }
}
