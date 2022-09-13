var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logarTempoExecucao } from "../decorators/logExecutionTime.js";
import { DaysOfWeek } from "../enums/DaysOfWeek.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
export class NegociacaoController {
    inputData;
    inputQtde;
    inputValor;
    negociacoes = new Negociacoes();
    negociacoesView = new NegociacoesView('#negociacoesView', true);
    mensagemView = new MensagemView('#mensagemView');
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQtde = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adicionar() {
        const negociacao = Negociacao.criarNegociacao(this.inputData.value, this.inputQtde.value, this.inputValor.value);
        if (!this.isBusinessDay(negociacao.data)) {
            this.mensagemView
                .update("Apenas negociações em dias úteis são aceitas.");
            return;
        }
        this.negociacoes.adicionarNegociacao(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    isBusinessDay(date) {
        console.log(date.getDay());
        return date.getDay() !== DaysOfWeek.SUNDAY
            && date.getDay() !== DaysOfWeek.SATURDAY;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQtde.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação efetuada.");
    }
}
__decorate([
    logarTempoExecucao()
], NegociacaoController.prototype, "adicionar", null);
