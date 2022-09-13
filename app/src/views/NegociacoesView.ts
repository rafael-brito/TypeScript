import { Negociacoes } from "../models/Negociacoes.js";
import { View } from "./View.js";

export class NegociacoesView extends View<Negociacoes> {

    //string interpolation
    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model.listarNegociacoes().map(e => {
                    return `
                        <tr>
                            <td>${e.data.toLocaleDateString()}</td>
                            <td>${e.quantidade}</td>
                            <td>${e.valor}</td>
                            <td>${e.volume}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
        </table>
        `;
    }

    update(model: Negociacoes): void {
        console.log(this.template(model));
        this.elemento.innerHTML = this.template(model);
    }

    /* caso a formatação dos componentes exigisse muita tralha, ops, 
    quero dizer, muito código, uma lógica muito verbosa,
    Seria de bom tom isolar essa regra específica da renderização do 
    template em um método visível apenas para a classe que o usa.

    Por se tratar de um código que quando executado produz a mesma saída
    independente do input, e em qualquer máquina, dispensa o teste unitário.

    Teste unitário é pra regra de negócio.

    Métodos privados estarão sempre por último na classe.

    private formatDateNegociacao(date: Date): string {
        return fuzzy logic to format a Date.
    } */
}