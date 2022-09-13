import { Negociacao } from "./Negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = []; //same as Array<Negociacao>

    adicionarNegociacao(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    listarNegociacoes(): readonly Negociacao[] {
        return this.negociacoes;
    }
    /*
        listarNegociacoes(): ReadonlyArray<Negociacao> {
            //abordagem #1 caso listarNegociacoes(): Array<Negociacao>
            // return [...this.negociacoes] JS spread operator 
            return this.negociacoes;
        }
    */
}