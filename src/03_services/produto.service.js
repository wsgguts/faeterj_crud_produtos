//03 - produto.service.js — o cérebro
//Aqui ficam as regras de negócio. Exemplo: "só retorna produtos com estoque > 0", validações, cálculos. Ele não sabe nada de HTTP.

import produtoRepository from "../04_repositories/produto.repository.js";

async function findAllProdutoService() {
    const produtos = await produtoRepository.findAllProdutoRepository();
    return produtos;
}

async function createProdutoService(novoProduto){
    const produto = await produtoRepository.createProdutoRepository(novoProduto);
    if (!produto) {
        throw new Error("Erro ao criar novo produto!");
    }
    return produto;
}

export default {
    findAllProdutoService,
    createProdutoService
}