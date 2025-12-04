// scripts/modules/cartInteraction.js

import { produtos } from '../data/produtos.js';

let quantidadesSabores = {};

export function resetarQuantidades() {
    quantidadesSabores = {};
    const saborItems = document.querySelectorAll('.sabor-item');
    saborItems.forEach(item => {
        item.querySelector('.qtd').innerText = 0;
        if (item.querySelector('.menos')) {
            item.querySelector('.menos').classList.add('disabled');
        }
    });
}

export function handleCliqueQuantidade(event, modalContainer) {
    const botao = event.target;
    const saborItem = botao.closest('.sabor-item');
    if (!saborItem) return;

    const produtoId = modalContainer.dataset.produtoId;
    const sabor = saborItem.dataset.sabor;
    if (quantidadesSabores[sabor] === undefined) {
        quantidadesSabores[sabor] = 0;
    }

    let quantidadeAtual = quantidadesSabores[sabor];
    const botaoMenos = saborItem.querySelector('.menos');

    if (botao.classList.contains('mais')) {
        quantidadeAtual++;
    } else if (botao.classList.contains('menos')) {
        if (quantidadeAtual > 0) {
            quantidadeAtual--;
        }
    }

    quantidadesSabores[sabor] = quantidadeAtual;
    saborItem.querySelector('.qtd').innerText = quantidadeAtual;

    if (quantidadeAtual === 0) {
        botaoMenos.classList.add('disabled');
    } else {
        botaoMenos.classList.remove('disabled');
    }
}

export function coletarItensDoModal(modal, modalContainer, adicionarAoCarrinho, fecharModal) {
    const itensParaAdicionar = [];
    const nomeBase = modal.querySelector('.item-info h3').innerText;
    const produtoId = modalContainer.dataset.produtoId;

    // Verifica se o produto tem descrição (hambúrgueres)
    if (produtos[produtoId].descricao) {
        const card = document.querySelector(`[data-produto="${produtoId}"]`);
        const precoText = card.querySelector('p').innerText;
        const preco = parseFloat(precoText.replace('R$', '').replace(',', '.'));
        const quantidade = parseInt(modal.querySelector('.qtd').innerText, 10);

        if (quantidade > 0) {
            itensParaAdicionar.push({
                nome: nomeBase,
                sabor: null, // Sem sabor específico
                quantidade: quantidade,
                preco: preco
            });
        }
    } else { // Para produtos com opções (bebidas)
        for (const sabor in quantidadesSabores) {
            const quantidade = quantidadesSabores[sabor];
            if (quantidade > 0) {
                const card = document.querySelector(`[data-produto="${produtoId}"]`);
                const precoText = card.querySelector('p').innerText;
                const preco = parseFloat(precoText.replace('R$', '').replace(',', '.'));

                itensParaAdicionar.push({
                    nome: nomeBase,
                    sabor: sabor,
                    quantidade: quantidade,
                    preco: preco
                });
            }
        }
    }

    if (itensParaAdicionar.length > 0) {
        adicionarAoCarrinho(itensParaAdicionar);
        fecharModal(modalContainer);
    } else {
        alert('Nenhum item selecionado.');
    }
}
