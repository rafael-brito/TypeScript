import { logarTempoExecucao } from "../decorators/logExecutionTime.js";

export abstract class View<T> {
    //we can declate more than one generic type e.g.: View<T, K>

    protected elemento: HTMLElement;
    private escapar: boolean = false;

    // ? indica parâmetro opcional
    // parâmetros opcionais devem ser os últimos de um método
    constructor(selector: string, escapar?: boolean) { 
        const element = document.querySelector(selector);
        if (element) {
            this.elemento = element as HTMLElement;

        } else {
            throw Error(`Seletor ${selector} não existe no DOM. Verifique.`);
        }

        if (escapar) {
            this.escapar = escapar;
        }
    }
    
    @logarTempoExecucao()
    update(model: T): void {
        let template = this.template(model);

        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }

        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}