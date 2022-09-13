import { View } from "./View.js";
export class NegociacoesView extends View {
    template(model) {
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
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    update(model) {
        console.log(this.template(model));
        this.elemento.innerHTML = this.template(model);
    }
}
