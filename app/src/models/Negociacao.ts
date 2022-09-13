export class Negociacao {

    constructor(
        private _data: Date,
        readonly quantidade: number,
        readonly valor: number) {
    }

    // programação defensiva
    get data(): Date {
        return new Date(this._data.toString());
    }

    get volume():number {
        return this.quantidade * this.valor;
    }

    public static criarNegociacao(
        strData: string,
        strQtde: string,
        strValor: string): Negociacao {
        const regexInputData = /-/g;
        const date = new Date(strData.replace(regexInputData, ','));
        const qtde = parseInt(strQtde);
        const valor = parseFloat(strValor);
        
        return new Negociacao(date, qtde, valor);
    }
}