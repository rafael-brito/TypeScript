export class Negociacao {
    _data;
    quantidade;
    valor;
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        return new Date(this._data.toString());
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criarNegociacao(strData, strQtde, strValor) {
        const regexInputData = /-/g;
        const date = new Date(strData.replace(regexInputData, ','));
        const qtde = parseInt(strQtde);
        const valor = parseFloat(strValor);
        return new Negociacao(date, qtde, valor);
    }
}
