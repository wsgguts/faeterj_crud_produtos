import produtoService from "../services/produto.service.js";

async function findAllProdutoController(request, response){
    try {
        const produto = await produtoService.findAllProdutoService();

    } catch (error) {

    }
}