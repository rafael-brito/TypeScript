import { NegociacaoController } from './controllers/NegociacaoController.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (evt: Event) => {
        evt.preventDefault();
        controller.adicionar();
    });
} else {
    throw Error("Não foi possível inicializar a aplicação. Verifique se o form existe!");
}

