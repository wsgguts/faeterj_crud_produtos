import produtoRepository from "../repositories/produto.repository.js";

async function findAllProdutoService() {
    const produtos = await produtoRepository.findAllProdutoRepository();
    return produtos;
}

export default {
    findAllProdutoService
}