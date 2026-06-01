import produtoRepository from "../04_repositories/produto.repository.js";

async function findAllProdutoService() {
    const produtos = await produtoRepository.findAllProdutoRepository();
    return produtos;
}

async function findProdutoByIdService(id){
    const produto = await produtoRepository.findProdutoByIdRepository(id)
    if (!produto) {
        throw new Error("Produto não encontrado!");
    }
    return produto;
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
    createProdutoService,
    findProdutoByIdService
}