import { produtos } from './data/produtos.js';
import { gerarOpcoesHTML } from './modules/optionsGenerator.js';
import { abrirModal as gerenciarAbrirModal, fecharModal as gerenciarFecharModal } from './modules/modalManager.js';
import { resetarQuantidades, handleCliqueQuantidade, coletarItensDoModal } from './modules/cartInteraction.js';
import { adicionarAoCarrinho } from './carrinho.js';

// ############# SELETORES DE ELEMENTOS #############
const modalContainer = document.getElementById('modal-container');
const modal = document.querySelector('.modal');
const botoesAdicionar = document.querySelectorAll('.adiciona button');
const botaoFechar = document.querySelector('.modal .fechar');
const opcoesContainer = document.querySelector('.modal .opcoes');
const botaoAdicionarCarrinho = document.querySelector('.modal .adicionar-carrinho');

// ############# EVENT LISTENERS #############
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', (event) => gerenciarAbrirModal(event, modalContainer, modal, opcoesContainer, produtos, gerarOpcoesHTML, resetarQuantidades));
});
botaoFechar.addEventListener('click', () => gerenciarFecharModal(modalContainer));
opcoesContainer.addEventListener('click', (event) => handleCliqueQuantidade(event, modalContainer));
botaoAdicionarCarrinho.addEventListener('click', () => coletarItensDoModal(modal, modalContainer, adicionarAoCarrinho, gerenciarFecharModal));
opcoesContainer.addEventListener('click', (event) => {
    if (event.target.name === 'sabor-xtudo') {
        const checkboxes = document.querySelectorAll('[name="sabor-xtudo"]:checked');
        if (checkboxes.length > 3) {
            alert('Você pode escolher no máximo 3 sabores.');
            event.target.checked = false;
        }
    }
});

opcoesContainer.addEventListener('click', (event) => {
    if (event.target.name === 'sabor-xtudo') {
        const checkboxes = document.querySelectorAll('[name="sabor-xtudo"]:checked');
        if (checkboxes.length > 3) {
            alert('Você pode escolher no máximo 3 sabores.');
            event.target.checked = false;
        }
    }
});


