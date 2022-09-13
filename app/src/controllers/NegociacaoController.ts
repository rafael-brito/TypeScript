import { logarTempoExecucao } from "../decorators/logExecutionTime.js";
import { DaysOfWeek } from "../enums/DaysOfWeek.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacoesView } from "../views/NegociacoesView.js";

export class NegociacaoController {
    private inputData: HTMLInputElement; //union types |   intersection types & 
    private inputQtde: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView: MensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement; //explicity casting using 'as' or <DataType>
        this.inputQtde = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = <HTMLInputElement> document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    @logarTempoExecucao()
    public adicionar(): void {
        const negociacao = Negociacao.criarNegociacao(
            this.inputData.value,
            this.inputQtde.value,
            this.inputValor.value
        );

        if (!this.isBusinessDay(negociacao.data)) {
            this.mensagemView
                .update("Apenas negociações em dias úteis são aceitas.");
            return;
        }

        this.negociacoes.adicionarNegociacao(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    private isBusinessDay(date: Date): boolean {
        console.log(date.getDay());
        return date.getDay() !== DaysOfWeek.SUNDAY 
            && date.getDay() !== DaysOfWeek.SATURDAY;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQtde.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação efetuada.");
    }
}
